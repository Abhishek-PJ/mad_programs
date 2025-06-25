import 'package:flutter/material.dart';

void main() {
  runApp(MyCounterApp());
}

class MyCounterApp extends StatefulWidget {
  @override
  MyCounterAppState createState() => MyCounterAppState();
}

class MyCounterAppState extends State<MyCounterApp> {
  int counter = 0;

  void increment() {
    setState(() {
      counter++;
    });
  }

  void decrement() {
    setState(() {
      counter--;
    });
  }

  void reset() {
    setState(() {
      counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Simple Counter'),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(child: Text('Counter value: $counter')),
            Padding(
              padding: EdgeInsets.only(top: 8.0),
              child: ElevatedButton(onPressed: increment, child: Text('Increment')),
            ),
            Padding(
              padding: EdgeInsets.only(top: 8.0),
              child: ElevatedButton(onPressed: decrement, child: Text('Decrement')),
            ),
            Padding(
              padding: EdgeInsets.only(top: 8.0),
              child: ElevatedButton(onPressed: reset, child: Text('Reset')),
            ),
          ],
        ),
      ),
    );
  }
}
