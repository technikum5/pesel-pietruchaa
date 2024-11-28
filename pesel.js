
        
        function validatePESEL(pesel) {
            if (pesel.length !== 11 || isNaN(pesel)) {
                return false; 
            }

            const z = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]; 
            let sum = 0;

            for (let i = 0; i < 10; i++) {
                sum += parseInt(pesel[i]) * z[i];
            }

            const x = (10 - (sum % 10)) % 10;

            return x === parseInt(pesel[10]);
        }

       
        function extractBirthDateFromPESEL(pesel) {
            if (!validatePESEL(pesel)) {
                return null; 
            }

            const rokPart = parseInt(pesel.slice(0, 2));
            const miesiacPart = parseInt(pesel.slice(2, 4)); 
            const dzienPart = parseInt(pesel.slice(4, 6)); 

            let rok;
            let miesiac = miesiacPart;

       
            if (miesiac >= 1 && miesiac <= 12) {
                rok = 1900 + rokPart; 
            } else if (miesiac >= 21 && miesiac <= 32) {
                rok = 2000 + rokPart; 
                miesiac -= 20;
            } else if (miesiac >= 41 && miesiac <= 52) {
                rok = 2100 + rokPart; 
                miesiac -= 40;
            } else if (miesiac >= 61 && miesiac <= 72) {
                rok = 2200 + rokPart; 
                miesiac -= 60;
            } else if (miesiac >= 81 && miesiac <= 92) {
                rok = 1800 + rokPart; 
                miesiac -= 80;
            } else {
                return null;
            }

            return `${rok}-${String(miesiac).padStart(2, '0')}-${String(dzienPart).padStart(2, '0')}`;
        }

       
        function extractGenderFromPESEL(pesel) {
            if (!validatePESEL(pesel)) {
                return null; 
            }

            const y = parseInt(pesel[9]);
            return y % 2 === 0 ? "Kobieta" : "Mężczyzna";
        }

        
        const pesel = "06221703872"; 

    document.write(" Czy PESEL jest prawidłowy? ", validatePESEL(pesel));
    document.write(" Data urodzenia: ", extractBirthDateFromPESEL(pesel));
    document.write(" Płeć: ", extractGenderFromPESEL(pesel));