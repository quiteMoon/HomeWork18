#include <iostream>
#include <string>

using namespace std;
// Task 1
//struct Complex {
//    double real;
//    double imag; 
//
//    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
//};
//
//Complex add(const Complex& a, const Complex& b) {
//    return { a.real + b.real, a.imag + b.imag };
//}
//
//Complex subtract(const Complex& a, const Complex& b) {
//    return { a.real - b.real, a.imag - b.imag };
//}
//
//Complex multiply(const Complex& a, const Complex& b) {
//    return { a.real * b.real - a.imag * b.imag, a.real * b.imag + a.imag * b.real };
//}
//
//Complex divide(const Complex& a, const Complex& b) {
//    double denominator = b.real * b.real + b.imag * b.imag;
//    return { (a.real * b.real + a.imag * b.imag) / denominator,
//            (a.imag * b.real - a.real * b.imag) / denominator };
//}
//
//void print(const Complex& c) {
//    cout << c.real << (c.imag >= 0 ? " + " : " - ") << abs(c.imag) << "i" << endl;
//}
//
//int main() {
//    Complex a(4.0, 5.0);
//    Complex b(2.0, -3.0);
//
//    Complex sum = add(a, b);
//    Complex diff = subtract(a, b);
//    Complex prod = multiply(a, b);
//    Complex quot = divide(a, b);
//
//    cout << "a = "; print(a);
//    cout << "b = "; print(b);
//    cout << "a + b = "; print(sum);
//    cout << "a - b = "; print(diff);
//    cout << "a * b = "; print(prod);
//    cout << "a / b = "; print(quot);
//}

// Task 2
//struct Car {
//    double length;         
//    double clearance;    
//    double engineVolume;   
//    double enginePower;    
//    double wheelDiameter;  
//    string color;          
//    string transmission;   
//
//    void setValues(double len, double clr, double engVol, double engPow, double wheelDia, const string& col, const string& trans) {
//        length = len;
//        clearance = clr;
//        engineVolume = engVol;
//        enginePower = engPow;
//        wheelDiameter = wheelDia;
//        color = col;
//        transmission = trans;
//    }
//
//    void displayValues() const {
//        cout << "Length: " << length << " meters" << endl;
//        cout << "Clearance: " << clearance << " meters" << endl;
//        cout << "Engine Volume: " << engineVolume << " liters" << endl;
//        cout << "Engine Power: " << enginePower << " horsepower" << endl;
//        cout << "Wheel Diameter: " << wheelDiameter << " inches" << endl;
//        cout << "Color: " << color << endl;
//        cout << "Transmission: " << transmission << endl;
//    }
//};
//
//void searchByColor(const Car cars[], int size, const string& color) {
//    for (int i = 0; i < size; ++i) {
//        if (cars[i].color == color) {
//            cars[i].displayValues();
//            cout << endl;
//        }
//    }
//}
//
//void searchByTransmission(const Car cars[], int size, const string& transmission) {
//    for (int i = 0; i < size; ++i) {
//        if (cars[i].transmission == transmission) {
//            cars[i].displayValues();
//            cout << endl;
//        }
//    }
//}
//
//int main() {
//    const int SIZE = 3;
//    Car cars[SIZE];
//
//    cars[0].setValues(4.5, 0.2, 2.0, 150, 18, "Red", "Manual");
//    cars[1].setValues(4.2, 0.18, 1.8, 130, 17, "Blue", "Automatic");
//    cars[2].setValues(4.8, 0.22, 2.5, 200, 19, "Red", "Automatic");
//
//    cout << "All Cars:" << endl;
//    for (int i = 0; i < SIZE; ++i) {
//        cars[i].displayValues();
//        cout << endl;
//    }
//
//    string searchColor = "Red";
//    cout << "Cars with color " << searchColor << ":" << endl;
//    searchByColor(cars, SIZE, searchColor);
//
//    string searchTransmission = "Automatic";
//    cout << "Cars with transmission type " << searchTransmission << ":" << endl;
//    searchByTransmission(cars, SIZE, searchTransmission);
//}