package com.example.intent2;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class SecondActivity extends AppCompatActivity {

    TextView displayName,displayEmail,displayMno;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        displayEmail=findViewById(R.id.displayEmail);
        displayName=findViewById(R.id.displayName);
        displayMno=findViewById(R.id.displayMno);


        Intent intent = getIntent();
        String email=intent.getStringExtra("Email");
        String name=intent.getStringExtra("Name");
        String mobileno = intent.getStringExtra("Mobileno");


        displayEmail.setText("Email:"+email);
        displayName.setText("Name:"+name);
        displayMno.setText("Mobile No:"+mobileno);







    }
}
