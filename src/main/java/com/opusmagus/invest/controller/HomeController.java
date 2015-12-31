package com.opusmagus.invest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {
	
	@RequestMapping(value="/index", method = RequestMethod.GET)
	public String index()
	{
		return "index";
	}
	
}
