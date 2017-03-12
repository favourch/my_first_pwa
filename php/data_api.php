<?php

/**
* error reporting 
*/

ini_set("display_errors", "1");
error_reporting(E_ALL);

/**
* error reporting end
*/


use Json\Json;

require __DIR__."/Json.php";


$data = [
	[
		'name' => 'Saikat Dutta',
		'age'  => 24,
		'gender' => 'male',
		'phone_number' => '9093036897',
		'city' => 'Durgapur',
		'email' => 'saikatdutta1991@gmail.com',
		'picture_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-7zXZxxO2LzXEpOAcb-ZNR28t6oK3yen3IHGkgNh2pfLHsSxPYOB8tQ'
	],
	[
		'name' => 'Krishna Ghosh',
		'age'  => 24,
		'gender' => 'male',
		'phone_number' => '9849583785',
		'city' => 'Durgapur',
		'email' => 'krishna@gmail.com',
		'picture_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-7zXZxxO2LzXEpOAcb-ZNR28t6oK3yen3IHGkgNh2pfLHsSxPYOB8tQ'
	],
	[
		'name' => 'Jyotirmoy Goswami',
		'age'  => 24,
		'gender' => 'male',
		'phone_number' => '9847587374',
		'city' => 'Bangalore',
		'email' => 'jyotirmoy@gmail.com',
		'picture_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-7zXZxxO2LzXEpOAcb-ZNR28t6oK3yen3IHGkgNh2pfLHsSxPYOB8tQ'
	],
	[
		'name' => 'Amit Patra',
		'age'  => 24,
		'gender' => 'male',
		'phone_number' => '9485763765',
		'city' => 'Medinipur',
		'email' => 'amit@gmail.com',
		'picture_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-7zXZxxO2LzXEpOAcb-ZNR28t6oK3yen3IHGkgNh2pfLHsSxPYOB8tQ'
	],
];
//sleep(2);

Json::render($data);