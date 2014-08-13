'use strict';

angular.module('pocappApp')
    .factory('dataFactory', function() {

    	function getData (name) {
    		var data = null;

    		try
    		{
    			data = JSON.parse(localStorage.getItem(name));
    		}
    		catch (e)
    		{
    			console.log(e);
    		}

    		return data;
    	}

    	function setData (key, data) {

    		try
    		{
    			localStorage.setItem(key, JSON.stringify(data));
        	}
    		catch (e)
    		{
    			console.log(e);
    		}
    		
    	}

    	return {
            getData: getData,
            setData: setData
        };
});