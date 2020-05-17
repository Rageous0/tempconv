const units = ['Celsius', 'Fahrenheit', 'Kelvin'];

class TempUnits {
	unitValidator(str) {
		if(str.match(/((°?(C|F))|K|(Celsius|Fahrenheit|Kelvin))/i)) {
			let val;
			if(str.length === 1) return str;
			if(str.length === 2) return str.slice(1);
			if(units.includes(str)) return str[0];
			return null;
		}
	}
}

// Convert from one unit to the other.
module.exports.Convert = (data) => {
	if(typeof opts !== 'object' || Array.isArray(data)) throw TypeError('[UnitError]: Invalid data provided, type must be object.');
	if(!data.from) throw TypeError('[UnitError]: Missing data.from.');
	if(!data.to) throw TypeError('[UnitError]: Missing data.to.');
	if(!data.value) throw TypeError('[UnitError]: Missing data.value.');
	if(!data.float) data.float = 1;
	
	const tu = new TempUnits();
	const f = tu.unitValidator(data.from);
	const t = tu.unitValidator(data.to);
		
	if(!f || !t) throw TypeError('[UnitError]: Invalid unit provided.');
	if(typeof data.value !== 'number') throw TypeError('[UnitError]: Invalid value provided, type must be number.');
	if(typeof data.float !== 'number') throw TypeError('[UnitError]: Invalid float provided, type must be a number');
	
	let v;
		
	if(f == 'C') {
		if(t == 'F') {
			v = data.value * 1.8 + 32;
		} else if(t == 'K') {
			v = data.value + 273.15;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else if(f == 'F') {
		if(t == 'C') {
			v = (data.value - 32) / 1.8;
		} else if(t == 'K') {
			v = (data.value + 459.67) * 5/9;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else if(f == 'K') {
		if(t == 'C') {
			v = data.value - 273.15;
		} else if(t == 'F') {
			v = (data.value - 273.15) * 1.8 + 32;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else {
		throw TypeError('[UnitError]: Invalid unit provided as from.');
	} 
	return v.toFixed(data.float);
} 

// Access to the utility class used internally to validate the units provided.
module.exports.TempUnits = TempUnits;
