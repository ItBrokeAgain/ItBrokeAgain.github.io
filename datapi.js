class Dapi {

    constructor () {

        console.log("DAPI loaded.")
    }

    parts = [
        {
            title: 'Blue Ziptie',
            copydata: '1655127PE'
        },
        {
            title: 'Coolant 50/50',
            copydata: 'EC3501'
        },
        {
            title: 'CCV Filter',
            copydata: '2299013PE'
        },
        {
            title: 'Injector Flush',
            copydata: 'DK5P'
        },
        {
            title: 'Grease',
            copydata: 'GR1'
        },
        {
            title: 'RTV Silicone',
            copydata: '3164067CUM'
        },
        {
            title: 'Axle Flange Gasket',
            copydata: '03-01568'
        },
        {
            title: 'Coroplast Tape',
            copydata: '837X'
        },
        {
            title: 'Freon',
            copydata: 'R134A-2'
        },
        {
            title: 'Kevlar Pad',
            copydata: 'V46-1003-1750200'
        },
        {
            title: 'Oil Pan Gasket',
            copydata: '2111441PE'
        },
        {
            title: 'Oil Pan Plug',
            copydata: '1982821PE'
        },
        {
            title: '[PAC] Coolant Filter',
            copydata: '1843659PE'
        },
        {
            title: 'Torque Wrench (1")',
            copydata: 'STW200'
        },
        {
            title: 'Torque Wrench (1/2")',
            copydata: 'STW205'
        },
        {
            title: 'Torque Wrench (3/4")',
            copydata: 'STW160'
        },
        {
            title: 'Torque Wrench (3/8")',
            copydata: 'STW120'
        },
        {
            title: 'Electrical Tape',
            copydata: 'KE777-1'
        },
        {
            title: 'Black Paint (Flat)',
            copydata: '24433'
        },
        {
            title: 'Black Paint (Gloss)',
            copydata: '24415'
        },
        {
            title: 'WD40',
            copydata: 'KE110078'
        },
        {
            title: 'ATF',
            copydata: 'ATF'
        },
        {
            title: 'Brakleen',
            copydata: '05089'
        },
        {
            title: 'Carb Cleaner',
            copydata: 'KE4642'
        },
        {
            title: 'Ziptie (Fat)',
            copydata: 'CT05512'
        },
        {
            title: 'Ziptie (Skinny)',
            copydata: 'CT05317'
        },
        {
            title: 'Windshield Wash (Blue)',
            copydata: 'TWS0013'
        },
        {
            title: 'Mudflap (White TLG 24x24)',
            copydata: '112424-TLGW2'
        },
        {
            title: 'Mudflap Mounting Hardware',
            copydata: 'B516UNT'
        },
        {
            title: 'Battery (950 CCA)',
            copydata: 'BT31S91EXCH'
        },
        {
            title: 'Battery (925 CCA)',
            copydata: 'BT31S93EXCH'
        },
        {
            title: '#6 Hose Clamp',
            copydata: '9206TRP'
        },
        {
            title: '#8 Hose Clamp',
            copydata: '9208TRP'
        },
        {
            title: '#10 Hose Clamp',
            copydata: '9210TRP'
        },
        {
            title: 'Loctite 609',
            copydata: '135512'
        },
        {
            title: 'Loctite (Blue)',
            copydata: '24200PTX'
        },
        {
            title: 'Loctite (Red)',
            copydata: '27100PTX'
        },
        {
            title: 'Mudflap (White TLG 36x24)',
            copydata: '112430-TLGW2'
        },
        {
            title: 'Power Steering Fluid',
            copydata: 'KE4610'
        },
        {
            title: 'Heet (12oz)',
            copydata: '28201'
        },
        {
            title: 'Air Brake Conditioner',
            copydata: '90157'
        },
        {
            title: 'Solvent-Based Flush',
            copydata: 'VA11650'
        },
        {
            title: 'Hub Oil (32oz)',
            copydata: '10088LUC'
        },
        {
            title: 'Starting Fluid',
            copydata: '6752'
        },
        {
            title: 'White Lithium Grease',
            copydata: 'WG16'
        },
        {
            title: 'Battery Cleaner',
            copydata: 'KE05023'
        },
        {
            title: 'Windshield Wash (Green)',
            copydata: 'TWS0019'
        },
        {
            title: 'Roloc Disc 2"',
            copydata: '07480MMM'
        },
        {
            title: 'Roloc Disc 3"',
            copydata: '07485MMM'
        },
        {
            title: 'Scotchbrite Pad',
            copydata: '07447MMM'
        },
        {
            title: 'Roloc Grinding Disc 2"',
            copydata: '01396MMM'
        },
        {
            title: 'Roloc Conditioning Disc 4"',
            copydata: '07482MMM'
        },
        {
            title: 'Roloc Grinding Disc 3"',
            copydata: '01406MMM'
        },
        {
            title: '[PAC] Oil Filter (Centrifugal)',
            copydata: '1922496PE'
        },
        {
            title: '[PAC] Fuel Filter Set',
            copydata: '2272926PE'
        },
        {
            title: '[PAC] Gasket 4" (Skinny)',
            copydata: '1844896PE'
        },
        {
            title: '[PAC] Gasket 5" (Skinny)',
            copydata: '1844253PE'
        },
        {
            title: '[PAC] Gasket 5" (Fat)',
            copydata: '1827320PE'
        },
        {
            title: '[CUM] Gasket 4" (Skinny)',
            copydata: '3684359CUM'
        },
        {
            title: '[CUM] Gasket 4" (Fat)',
            copydata: '2880214CUM'
        },
        {
            title: '[CUM] Gasket 5" (Skinny)',
            copydata: '2866636CUM'
        },
        {
            title: '[CUM] Gasket 5" (Fat)',
            copydata: '2880215CUM'
        },
        {
            title: 'A/C Washer Seal #6',
            copydata: '730392ATC'
        },
        {
            title: 'A/C Washer Seal #8',
            copydata: '730393ATC'
        },
        {
            title: 'A/C Washer Seal #10',
            copydata: '730394ATC'
        },
        {
            title: 'A/C Washer Seal #12',
            copydata: '730395ATC'
        },
    ]





    LoadParts() {

        return this.parts.sort((x, y) => {

            if(x.title[0] < y.title[0]) return -1;
            else return 0;
        });
    }





    SearchForPart(phrase) {


        if(phrase == undefined) return this.LoadParts();
        let arr = [];

        this.parts.forEach((el, i) => {

            if(`${el.title}`.toUpperCase().includes(`${phrase}`.toUpperCase())) arr.push(el);
        })

        return arr;
    }
}