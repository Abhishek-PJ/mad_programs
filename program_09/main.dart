import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(home: MyHome()));
}

class MyHome extends StatefulWidget {
  const MyHome({super.key});

  @override
  State<MyHome> createState() => _MyHomeState();
}

class _MyHomeState extends State<MyHome> {
  String text = "Try double tap or swipe";

  Offset start = Offset.zero; // where finger touched

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Gesture Detector")),
      body: GestureDetector(
        onDoubleTap: () {
          setState(() {
            text = "You double tapped!";
          });
        },
        onPanStart: (details) {
          start = details.globalPosition;
        },
        onPanUpdate: (details) {
          double dx = details.globalPosition.dx - start.dx;
          double dy = details.globalPosition.dy - start.dy;

          if (dx > 50) {
            setState(() => text = "Swiped Right");
          } else if (dx < -50) {
            setState(() => text = "Swiped Left");
          } else if (dy > 50) {
            setState(() => text = "Swiped Down");
          } else if (dy < -50) {
            setState(() => text = "Swiped Up");
          }
        },
        child: Center(
            child: Text(
              text,
              style: TextStyle(fontSize: 24, color: Colors.white),
            ),
          ),
        ),
      
    );
  }
}
