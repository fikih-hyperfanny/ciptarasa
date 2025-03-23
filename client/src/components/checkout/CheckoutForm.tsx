import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { orderValidationSchema, type OrderValidation } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CheckoutForm() {
  const { toast } = useToast();
  const [_, navigate] = useLocation();
  const { cart, cartTotal, deliveryFee, clearCart } = useCart();

  const form = useForm<OrderValidation>({
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      customerName: "",
      phone: "",
      address: "",
      instructions: "",
      paymentMethod: "cash",
      items: cart,
      totalAmount: cartTotal + deliveryFee
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: OrderValidation) => {
      return apiRequest("POST", "/api/orders", data);
    },
    onSuccess: () => {
      navigate("/order-success");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was an error placing your order. Please try again.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(data: OrderValidation) {
    // Update the items and total amount before submitting
    data.items = cart;
    data.totalAmount = cartTotal + deliveryFee;
    mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Delivery Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter your complete delivery address" 
                  rows={3}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Instructions (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Any special instructions for delivery" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <h3 className="text-xl font-semibold mt-8 mb-4 pb-2 border-b">Payment Method</h3>
        
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-grow cursor-pointer">Cash on Delivery</Label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="flex-grow cursor-pointer">Bank Transfer</Label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex-grow cursor-pointer">Digital Wallet</Label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 003 3h10a3 3 0 003-3V9H9a1 1 0 110-2h9V4a2 2 0 00-2-2H4zm7 14a1 1 0 10-2 0 1 1 0 002 0zm-4 0a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full py-6 mt-6 bg-primary hover:bg-primary/90 text-white font-medium"
          disabled={isPending || cart.length === 0}
        >
          {isPending ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Order...
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <span>Place Order</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
