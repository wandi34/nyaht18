void setup(){
Serial.begin(9600);     // Communication started with 9600 baud
}
void loop(){
  
delay(1000);
int sensor=analogRead(A1); // Incoming analog signal read and appointed sensor
Serial.println(sensor);   //Wrote serial port
}