package com.sauce.userinterfaces;

import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class LoginPage {

	public static final Target USER = Target.the("Username").located(By.id("user-name"));
	public static final Target PASSWORD = Target.the("Enter you parssword").located(By.id("password"));
	public static final Target LOGIN_BUTTON = Target.the("Login button").located(By.id("login-button"));
	}