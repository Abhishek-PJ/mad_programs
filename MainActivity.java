package com.example.myapplication2;

import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    int progress = 0;
    ProgressBar progressBar;
    TextView progressText;
    Button startButton;
    Handler handler = new Handler();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Now that the layout is loaded, findViewById works correctly
        progressBar = findViewById(R.id.progressBar);
        progressText = findViewById(R.id.progressText);
        startButton = findViewById(R.id.startButton);

        startButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progress = 0;
                progressBar.setProgress(0);
                progressText.setText("Progress: 0%");
                progressBar.setVisibility(View.VISIBLE);
                progressText.setVisibility(View.VISIBLE);
                startButton.setEnabled(false);

                handler.postDelayed(updateProgress, 100);
            }
        });
    }

    // This Runnable will update progress slowly
    Runnable updateProgress = new Runnable() {
        @Override
        public void run() {
            if (progress < 100) {
                progress += 5;
                progressBar.setProgress(progress);
                progressText.setText("Progress: " + progress + "%");
                handler.postDelayed(this, 200);
            } else {
                progressBar.setVisibility(View.GONE);
                progressText.setVisibility(View.GONE);
                startButton.setEnabled(true);
                showAlert();
            }
        }
    };

    void showAlert() {
        new AlertDialog.Builder(this)
                .setTitle("Done!")
                .setMessage("Loading completed.")
                .setPositiveButton("OK", null)
                .show();
    }
}
