using System;

namespace ArchitectArithmetic
{
  class Program
  {
    public static void Main(string[] args)
    {
        double rectArea = Rect(1500, 2500);
        double circleArea = 0.5 * Circle(375);
        double triangleArea = Triangle(750, 500);
        double totalArea = rectArea + circleArea + triangleArea;
        double totalCost = Math.Round(180 * totalArea, 2);
        Console.WriteLine($"The total cost of materials for this floor plan is {totalCost} pesos.");
    }
    static double Rect(double length, double width) {
        return length * width;
    }
    static double Circle(double radius) {
        return Math.PI * Math.Pow(radius, 2);
    }
    static double Triangle(double bottom, double height) {
        return 0.5 * bottom * height;
    }
  }
}
