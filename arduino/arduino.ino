void setup() {
  Serial.begin(9600);     // Communication started with 9600 baud
}
void loop() {
  int inputThreshold = 500;
  boolean rain = false;
  //delay(10);
  int alice = analogRead(A1); // Incoming analog signal read and appointed sensor
  int bob = analogRead(A2);
  int charlie = analogRead(A3);
  pinMode(LED_BUILTIN, OUTPUT);
  if (alice > inputThreshold && bob > inputThreshold) {
    digitalWrite(LED_BUILTIN, HIGH);
    rain = true;
  } else if (alice > inputThreshold && charlie > inputThreshold) {
    digitalWrite(LED_BUILTIN, HIGH);
    rain = true;
  } else if (bob > inputThreshold && charlie > inputThreshold) {
    digitalWrite(LED_BUILTIN, HIGH);
    rain = true;
  } else {
    digitalWrite(LED_BUILTIN, LOW);
    rain = false;
  }
  
}