package me.geesy.modules;

import me.geesy.api.annotations.ClientMod;
import me.geesy.api.annotations.module.Category;
import me.geesy.api.annotations.module.Module;

@ClientMod(category = Category.WORLD, name = "Test")
public class TestModule extends Module {
	
	@Override
	public void onEnable() {
		System.out.println("Test on");
		super.onEnable();
	}
	
	@Override
	public void onDisable() {
		System.out.println("Test off");
		super.onDisable();
	}

    @drwsrn{
        //some code
    }

    @mc{
        //some code that extends java
    }
	
}
