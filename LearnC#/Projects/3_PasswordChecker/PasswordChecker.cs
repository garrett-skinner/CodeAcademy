using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
        int minLength = 8;
        string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string lowercase = "abcdefghijklmnopqrstuvwxyz";
        string digits = "0123456789";
        string specialChars = "!@#$%^&*()<>?;:";

        Console.WriteLine("Please enter a password:");
        string input = Console.ReadLine();
        int score = 0;

        if (input.Length >= minLength) { score++; }
        if (Tools.Contains(input, uppercase)) { score++; }
        if (Tools.Contains(input, lowercase)) { score++; }
        if (Tools.Contains(input, digits)) { score++; }
        if (Tools.Contains(input, specialChars)) { score++; }
        
        switch(score) {
            case (>= 4):
                Console.WriteLine("Your password is extremely strong!");
                break;
            case 3:
                Console.WriteLine("Your password is strong.");
                break;
            case 2:
                Console.WriteLine("Your password strength is medium.");
                break;
            case 1:
                Console.WriteLine("Your password is weak.");
                break;
            default:
                Console.WriteLine("Your password does not meet any of our standards.");
                break;
        } 
    }
  }
}
