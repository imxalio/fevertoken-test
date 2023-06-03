using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 100; i++)
        {
            CheckNumber(i);
        }
    }

    static void CheckNumber(int i)
    {
        string checker = "";

        if (i % 3 == 0)
        {
            checker += "hello ";
        }
        if (i % 5 == 0)
        {
            checker += "world ";
        }
        if (i % 7 == 0)
        {
            checker += "yoo ";
        }

        if (checker != "")
        {
            Console.WriteLine(checker);
        }
        else
        {
            Console.WriteLine(i);
        }
    }
}
