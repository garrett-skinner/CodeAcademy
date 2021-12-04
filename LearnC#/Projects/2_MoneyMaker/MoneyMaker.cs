using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Money Maker!");
      Console.WriteLine("Enter an amount to convert to coins:");
      double input = Convert.ToDouble(Console.ReadLine());
      Console.WriteLine($"{input} cents is equal to...");

      double remainder;
      double goldValue = 10;
      double silverValue = 5;
      double goldCoins = Math.Floor(input / goldValue);
      remainder = input % goldValue;
      double silverCoins = Math.Floor(remainder / silverValue);
      remainder = input % silverValue;
      double bronzeCoins = remainder;
      
      Console.WriteLine($"Gold coins: {goldCoins}");
      Console.WriteLine($"Silver coins: {silverCoins}");
      Console.WriteLine($"Bronze coins: {bronzeCoins}");
    }
  }
}
