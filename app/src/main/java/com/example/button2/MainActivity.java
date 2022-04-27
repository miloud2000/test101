package com.example.button2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
//  say my name ok see you

public class MainActivity extends AppCompatActivity {

    Button simpleButton1, simpleButton2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        simpleButton1 = (Button) findViewById(R.id.simpleButton1);// get id of button 1
        simpleButton2 = (Button) findViewById(R.id.simpleButton2);// get id of button 2

        simpleButton1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(), "Simple Button 1", Toast.LENGTH_LONG).show();// display the text
                                                                                                     // of button1
            }
        });
        simpleButton2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(), "Simple Button 2", Toast.LENGTH_LONG).show();// display the text
                                                                                                     // of button2
            }
        });
    }

}