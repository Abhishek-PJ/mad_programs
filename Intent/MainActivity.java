package com.example.intent2;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    EditText inputPassword,inputEmail,inputName,inputMno;
    Button signupButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        inputPassword=findViewById(R.id.inputPassword);
        inputEmail=findViewById(R.id.inputEmail);
        inputName=findViewById(R.id.inputName);
        inputMno=findViewById(R.id.inputMno);
        signupButton=findViewById(R.id.signupButton);






        signupButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String Password=inputPassword.getText().toString();
                String Email=inputEmail.getText().toString();
                String Name=inputName.getText().toString();
                String Mobileno=inputMno.getText().toString();

                Intent intent = new Intent(MainActivity.this,SecondActivity.class);
                intent.putExtra("Name",Name);
                intent.putExtra("Mobileno",Mobileno);
                intent.putExtra("Email",Email);
                startActivity(intent);



            }
        });


    }
}
