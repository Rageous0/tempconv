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

module.exports.Convert = (from, to, value) => {
	const tu = new TempUnits();
	const f = tu.unitValidator(from);
	const t = tu.unitValidator(to);
		
	if(!f || !t) throw TypeError('[UnitError]: Invalid unit provided.');
	
	let v;
		
	if(f == 'C') {
		if(t == 'F') {
			v = value * 1.8 + 32;
		} else if(t == 'K') {
			v = value + 273.15;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else if(f == 'F') {
		if(t == 'C') {
			v = (value - 32) / 1.8;
		} else if(t == 'K') {
			v = (value + 459.67) * 5/9;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else if(f == 'K') {
		if(t == 'C') {
			v = value - 273.15;
		} else if(t == 'F') {
			v = (value - 273.15) * 1.8 + 32;
		} else {
			throw TypeError('[UnitError]: Invalid unit provided as target.');
		}
	} else {
		throw TypeError('[UnitError]: Invalid unit provided as from.');
	} 
	return v.toFixed(2);
} 
