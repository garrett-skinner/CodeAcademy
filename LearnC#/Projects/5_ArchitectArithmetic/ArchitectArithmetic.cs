using System;

namespace ArchitectArithmetic
{
  class Program
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("What monument would you like to work with?");
      string monument = Console.ReadLine();
      Console.WriteLine(CalculateTotalCost(monument));
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
    static string CalculateTotalCost(string building) {
      double rectArea;
      double circleArea;
      double triangleArea;
      double totalArea;
      double totalCost;
      switch(building) {
        case "Teotihuacan":
          rectArea = Rect(1500, 2500);
          circleArea = 0.5 * Circle(375);
          triangleArea = Triangle(750, 500);
          totalArea = rectArea + circleArea + triangleArea;
          break;
        case "Taj Mahal":
          rectArea = Rect(90.5, 90.5);
          triangleArea = Triangle(24, 24);
          totalArea = rectArea - 4 * triangleArea;
          break;
        case "Al-Masjid al-haram":
          rectArea = Rect(284, 264);
          rectArea += Rect(180, 106);
          triangleArea = Triangle(84, 264);
          totalArea = rectArea - triangleArea;
          break;
        default:
          return "Invalid selection.";
      }
      totalCost = Math.Round(180 * totalArea, 2);
      return $"The total cost for the {building} plan is {totalCost} pesos.";
    }
  }
}
