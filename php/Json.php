<?php

namespace Json;

class Json
{
	protected static function setJsonHeader()
	{
		header("Content-type: application/json");
	}

	protected static function response($data)
	{
		self::setJsonHeader();
		return $jsonEncoded = json_encode($data);
	}


	public static function render($data = [])
	{
		echo self::response($data);
	}
}