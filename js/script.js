/* ================= CALENDAR STATE ================= */
let activeCalYear = 2026;
let activeCalMonth = 8; // September (0-indexed: 0 = Jan, 8 = Sep)
let activeLanguage =
    localStorage.getItem("selectedLanguage") || "hinglish";

/* ================= MANUAL BOOKED DATES ================= */
// Set each date to either "afternoon" or "night"
const bookedDates = {
};

/* ================= CALENDAR LOCALIZATION DATA ================= */
const calendarI18n = {
    hinglish: {
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    },
    hindi: {
        weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        months: [
            "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
            "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
        ]
    }
};

/* ================= LANGUAGE DATA ================= */

const translations = {

    /* ---------- HINGLISH ---------- */


    hinglish: {
        legendAfternoon: "Afternoon Booked",
        legendNight: "Night Booked",
        home: "Home",
        whyChooseUs: "Why Choose Us",
        facilities: "Facilities",
        gallery: "Gallery",
        contact: "Contact",
        aboutUs: "About Us",
        bookTour: "Book a Tour",

        heroLabel:
            "A Celebration Worth Remembering",

        heroTitle:
            "Aapke Sapno Ki Shaadi, Ek Khoobsurat Jagah Par.",

        heroDescription:
            "Sadhana Utsav Vatika mein apne special moments ko ek grand aur yaadgaar celebration mein badaliye.",

        heroButton:
            "Book a Tour",

        galleryButton:
            "View Gallery",

        heroInfo1:
            "Beautiful Venue",

        heroInfo2:
            "Elegant Celebrations",

        heroInfo3:
            "Lush & Serene",


        whyChooseLabel:
            "WHY CHOOSE US",

        whyChooseTitle:
            "Har Celebration Ke Liye Taiyaar",

        whyChooseDescription:
            "Shaadi, reception ya kisi bhi khaas occasion ke liye ek comfortable aur elegant space.",


        guests:
            "Guests Capacity",

        mainHallTitle:
            "Main Hall",

        mainHall:
            "Grand & Spacious",


            mainHallDetailsTitle:
    "Main Hall Highlights",

mainHallPoint1:
    "Grand aur spacious interior.",

mainHallPoint2:
    "Guests ke poore aaram ke liye fully air-conditioned (AC) hall.",

mainHallPoint3:
    "Corporate meetings, conferences aur sabhi official programs ke liye perfectly suitable.",

mainHallPoint4:
    "Grand stage decoration ke saath premium sofas aur elegant banquet chairs ki arrangement.",

mainHallPoint5:
    "Hall ke andar soft, pleasant aur crystal-clear sound/DJ system.",

mainHallGalleryLabel:
    "MAIN HALL GALLERY",

mainHallGalleryTitle:
    "Main Hall Ki Kuch Jhalakiyan",

        diningTitle:
            "Dining",

        dining:
            "Separate Dining Space",

            diningDetailsTitle:
    "Dining Highlights",

diningPoint1:
    "Guests ke liye separate dining space.",

diningPoint2:
    "Organised dining tables aur dedicated food servers ki suvidha.",

diningPoint3:
    "High-quality catering utensils aur well-trained waiters food serve karne ke liye.",

diningPoint4:
    "Khule aasmaan ke neeche badi bheed ko aasaani se accommodate karne ke liye wide open lawn area.",

diningPoint5:
    "Baarish ya kharab mausam mein lunch aur dinner bina rukavat serve karne ke liye covered tin shed.",

diningGalleryLabel:
    "DINING GALLERY",

diningGalleryTitle:
    "Dining Space Ki Kuch Jhalakiyan",

        StageTitle:
            "Stage",

        Stage:
            "Outdoor Celebration Area",

            stageDetailsTitle:
    "Stage Highlights",

stagePoint1:
    "Celebrations ke liye open outdoor space.",

stagePoint2:
    "Sundar couple chair ke saath ek bada rectangular stage.",

stagePoint3:
    "Fresh natural flowers aur leaves se khoobsurat tareeqe se sajaya gaya stage.",

stagePoint4:
    "Stage par grand entry ke liye glass walkway, smoke (fog effect) aur special entry arrangements.",

stagePoint5:
    "Stage ke theek paas high-energy floor DJ aur dance area.",

stageGalleryLabel:
    "Stage GALLERY",

stageGalleryTitle:
    "Stage Ki Kuch Jhalakiyan",

        exploreSpace:
            "Explore →",


        amenitiesLabel:
            "EVERYTHING YOU NEED",

        amenitiesTitle:
            "Aapke Comfort Ka Poora Dhyaan",

        acTitle:
            "Air Conditioning",

        acDescription:
            "Comfortable atmosphere for your guests.",

        parkingTitle:
            "Valet Parking",

        parkingDescription:
            "Convenient parking arrangements for guests.",

        bridalTitle:
            "Bridal Room",

        bridalDescription:
            "A private space for the bride and family.",

        seatingArenaTitle: "Seating Arena",
seatingArenaDescription: "Guests ke liye comfortable aur organised seating arrangements.",

                    /* ---------- FACILITIES PAGE DETAILS ---------- */

        facilitiesMainDescription:
            "Aapke special occasion ko comfortable, convenient aur memorable banane ke liye thoughtfully planned facilities.",

        facilityExplore:
            "Explore →",


        /* ---------- VALET PARKING ---------- */

        valetLabel:
            "VALET PARKING",

        valetTitle:
            "Parking Made Comfortable For Your Guests",

        valetDescription:
            "Event ke dauraan guests ke arrival aur parking experience ko convenient aur organised rakhne ke liye parking assistance available hai.",

        valetPointsTitle:
            "What You Can Expect",

        valetPoint1:
            "Guests ke arrival ke time parking assistance available rahegi.",

        valetPoint2:
            "Parking process ko organised rakhne ki koshish ki jaati hai.",

        valetPoint3:
            "Venue par 200+ two-wheelers ke liye safe aur dedicated parking space.",

        valetPoint4:
            "25+ four-wheelers (cars) ke liye spacious aur hassle-free parking arrangement.",

        valetPoint5:
            "Guests ko venue tak pahunchne mein unnecessary difficulty na ho, iska dhyaan rakha jaata hai.",

        valetGalleryLabel:
            "VALET PARKING GALLERY",

        valetGalleryTitle:
            "A Convenient Arrival Experience",


        /* ---------- BRIDAL ROOM ---------- */

        bridalLabel:
            "BRIDAL ROOM",

        bridalDetailTitle:
            "A Private Space For The Bride And Family",

        bridalDetailDescription:
            "Shaadi ke important moments ke beech bride aur family ke liye ek private aur comfortable space jahan preparation aur personal moments peacefully enjoy kiye ja sakein.",

        bridalPointsTitle:
            "Bridal Room Features",

        bridalPoint1:
            "Bride ke liye fully AC room, private attached washroom ke saath.",

        bridalPoint2:
            "Family aur relatives ke aaram ke liye comfortable AC aur non-AC rooms.",

        bridalPoint3:
            "Poori tarah private, shant aur secure area taaki family bina kisi pareshani ke aaram kar sake.",

        bridalPoint4:
        "Makeup, dressing aur final preparation ke liye useful space.",
        bridalPoint5:
        "Har room mein comfortable gadday (mattresses) aur saaf-suthri bedding ki poori vyavastha.",

        bridalGalleryLabel:
            "BRIDAL ROOM GALLERY",

        bridalGalleryTitle:
            "A Space For Special Moments",


        /* ---------- CATERING ---------- */

        seatingArenaLabel: "SEATING ARENA",
seatingArenaDetailTitle: "Guests Ke Liye Aaramdayak Seating Ki Vyavastha",
seatingArenaDetailDescription: "Event ke dauran sabhi mehmaano ke aaram aur suvidha ke liye spacious aur well-planned seating layout.",
seatingArenaPointsTitle: "Seating Arrangement Ki Khaasiyat",
seatingArenaPoint1: "Guests ke aaram ke liye premium quality sofas aur drawing tables.",
seatingArenaPoint2: "Premium chair arrangements ka perfect combination.",
seatingArenaPoint3: "VIP guest room behtareen lighting aur attractive decoration ke saath.",
seatingArenaPoint4: "Guest rooms tak prompt aur attentive waiter service ki suvidha.",
seatingArenaPoint5: "Family aur senior citizens ke liye dedicated reserved space.",
seatingArenaGalleryLabel: "SEATING ARENA GALLERY",
seatingArenaGalleryTitle: "Ek Comfortable Experience",


        galleryLabel:
            "OUR MOMENTS",

        galleryTitle:
            "Jahan Har Tasveer Ek Yaad Ban Jaaye",

        galleryDescription:
            "Venue, stage, seating aur celebrations ki kuch khaas jhalakiyan.",


        contactLabel:
            "PLAN YOUR CELEBRATION",

        contactTitle:
            "Aapka Special Day Yahin Se Shuru Ho.",

        contactDescription:
            "Venue visit karne ya booking enquiry ke liye humse contact karein.",

        contactButton:
            "Contact Us",

        footerText:
            "Celebrating your special moments with elegance.",


        /* ---------- ABOUT PAGE ---------- */

        aboutLabel:
            "ABOUT US",

        aboutTitle:
            "Sadhana Utsav Vatika",

        aboutIntro:
            "Jahan celebrations sirf events nahi, balki yaadein ban jaati hain.",

        storyLabel:
            "OUR STORY",

        storyTitle:
            "Khushiyon Ke Safar Ka Ek Hissa",

        storyText:
            "Sadhana Utsav Vatika ka uddeshya families ko unke special occasions ke liye ek comfortable, elegant aur memorable venue provide karna hai.",

        leadershipLabel:
            "OUR LEADERSHIP",

        ownerTitle:
            "Owner",

        ownerName:
            "Mr. Sanjay Kumar Kushwaha",

        ownerText:
            "Maine Sadhana Utsav Vatika ki shuruwat is vision ke saath ki thi ki har parivar apne khaas palo ko bina kisi stress ke enjoy kar sake. Mera focus hamesha premium hospitality, excellent service aur ek welcoming environment banane par rehta hai. Mere aur meri team ke liye, aapka event sirf ek function nahi, balki ek yaadgaar anubhav hai jise hum poori lagan se nibhaate hain.Humsb ki issi lagan se aaj yeh venue is area ka sabse trusted aur pasandida celebration destination ban chuka hai.",

        teamLabel:
            "OUR TEAM",

        managerTitle:
            "Manager",

        managerName:
            "Manager Name Here",

        managerText:
            "Yahan manager ke baare mein actual information likhi jayegi.",

        experienceLabel:
            "OUR EXPERIENCE",

        experienceTitle:
            "Experience That Matters",

        years:
            "Years of Experience",

        events:
            "Events Hosted",

        bestService:
            "Best Service in the City",

        celebrations:
            "Focus on Celebrations",

            specialFacilities: "Special Facilities",
    specialFacilitiesHeading: "Special Facilities",
    sfNote1: "24/7 Uninterrupted Power Backup with silent generators.",
    sfNote2: "24/7 saaf aur pure drinking water (peene ke paani) ki continuous suvidha.",
    sfNote3: "Aapki pasand aur suggestions ke mutabik customized stage aur theme decoration.",
    sfNote4: "Requirement ke hisaab se selfie stands, welcoming staff aur DJ setup ke arrangements.",
    sfNote5: "Dedicated professional security personnel and CCTV surveillance.",
    sfNote6: "In-house premium catering and customizable food menu options.",

    backButton:
    "Back",

mainHallPageTitle:
    "Main Hall | Sadhana Utsav Vatika",

mainHallPageLabel:
    "MAIN HALL",

mainHallPageTitleText:
    "Main Hall",

mainHallPageDescription:
    "Shaadi, reception, birthday, engagement, Haldi, Mehndi aur sabhi manglik karyakramon ke liye ideal.",

diningPageTitle:
    "Dining | Sadhana Utsav Vatika",

diningPageLabel:
    "DINING",

diningPageTitleText:
    "Dining",

diningPageDescription:
    "Aapke celebration ke dauraan comfortable food service ke liye separate dining space.",

stagePageTitle:
    "Stage | Sadhana Utsav Vatika",

stagePageLabel:
    "STAGE",

stagePageTitleText:
    "Stage",

stagePageDescription:
    "Weddings, functions aur special occasions ke liye suitable outdoor celebration area.",

    bookingEnquiryNav: "Booking Enquiry",
        calendarSubtitle: "DATE AVAILABILITY",
        calendarTitle: "Check Hall Availability",
        calendarDesc: "Apne celebration ke liye month aur year choose karke booked tareekh check karein.",
        selectMonthLabel: "Month Chuniye:",
        selectYearLabel: "Year Chuniye:",
        legendBooked: "Booked (Tareekh Available Nahi Hai)",
        legendAvailable: "Available (Booking Ke Liye Khali)",
        calendarNote: "Kisi bhi available date ko reserve karne ke liye humse directly contact karein.",
        contactHeading: "Get in Touch",
callUs: "Call Us",
whatsappTitle: "WhatsApp",
whatsappDesc: "Message us for booking & pricing",
addressTitle: "Address",
visitingHoursTitle: "Venue Visit Timings",
visitingHoursDesc: "07:00 AM to 07:00 PM (Open All Days)"
    },


    /* ---------- HINDI ---------- */

    hindi: {
        legendAfternoon: "दोपहर बुक है",
        legendNight: "रात बुक है",
        home: "होम",
        whyChooseUs: "हमें क्यों चुनें",
        facilities: "सुविधाएँ",
        gallery: "गैलरी",
        contact: "संपर्क",
        aboutUs: "हमारे बारे में",
        bookTour: "भ्रमण बुक करें",

        heroLabel:
            "एक ऐसा उत्सव जिसे हमेशा याद रखा जाए",

        heroTitle:
            "आपके सपनों की शादी, एक खूबसूरत जगह पर।",

        heroDescription:
            "साधना उत्सव वाटिका में अपने खास पलों को एक भव्य और यादगार उत्सव में बदलें।",

        heroButton:
            "भ्रमण बुक करें",

        galleryButton:
            "गैलरी देखें",

        heroInfo1:
            "खूबसूरत परिसर",

        heroInfo2:
            "शानदार आयोजन",

        heroInfo3:
            "हरितिमा और शांति",


        whyChooseLabel:
            "हमें क्यों चुनें",

        whyChooseTitle:
            "हर उत्सव के लिए तैयार",

        whyChooseDescription:
            "शादी, रिसेप्शन या किसी भी खास अवसर के लिए एक आरामदायक और सुंदर स्थान।",


        guests:
            "अतिथि क्षमता",

        mainHallTitle:
            "मुख्य हॉल",

        mainHall:
            "भव्य एवं विशाल",

            mainHallDetailsTitle:
    "मुख्य हॉल की विशेषताएँ",

mainHallPoint1:
    "भव्य और विशाल आंतरिक स्थान।",

mainHallPoint2:
    "अतिथियों की पूर्ण सुख-सुविधा हेतु पूर्णतः वातानुकूलित (AC) विशाल हॉल।",

mainHallPoint3:
    "व्यावसायिक बैठकों (Meetings), सम्मेलनों (Conferences) एवं आधिकारिक आयोजनों हेतु उपयुक्त।",

mainHallPoint4:
    "भव्य मंच सज्जा (Stage Decoration) के साथ आरामदायक VIP सोफे एवं उत्कृष्ट कुर्सियों की व्यवस्था।",

mainHallPoint5:
    "हॉल के भीतर कर्णप्रिय, संतुलित एवं सुरुचिपूर्ण साउंड/डीजे (DJ) व्यवस्था।",

mainHallGalleryLabel:
    "मुख्य हॉल गैलरी",

mainHallGalleryTitle:
    "मुख्य हॉल की कुछ झलकियाँ",


        diningTitle:
            "भोजन क्षेत्र",

        dining:
            "अलग भोजन क्षेत्र",

            diningDetailsTitle:
    "भोजन क्षेत्र की विशेषताएँ",

diningPoint1:
    "मेहमानों के लिए अलग भोजन क्षेत्र।",

diningPoint2:
    "सुसज्जित भोजन मेज (Dining Tables) एवं समर्पित भोजन परोसने वाले कर्मियों की व्यवस्था।",

diningPoint3:
    "उच्च गुणवत्ता वाले स्वच्छ कैटरिंग बर्तन एवं विनम्र, प्रशिक्षित वेटर सेवा।",

diningPoint4:
    "खुले आसमान के नीचे विशाल जनसमूह के सुगम स्वागत हेतु विस्तृत खुला लॉन परिसर।",

diningPoint5:
    "बारिश अथवा प्रतिकूल मौसम में निर्बाध भोजन (लंच/डिनर) के लिए मजबूत टिन शेड की सुविधा।",

diningGalleryLabel:
    "भोजन क्षेत्र गैलरी",

diningGalleryTitle:
    "भोजन क्षेत्र की कुछ झलकियाँ",


        StageTitle:
            "मंच",

        Stage:
            "आउटडोर आयोजन क्षेत्र",

            stageDetailsTitle:
    "मंच की विशेषताएँ",

stagePoint1:
    "समारोह के लिए खुला आउटडोर स्थान।",

stagePoint2:
    "नवदंपति के लिए भव्य युगल कुर्सी (Couple Throne) से सुसज्जित विशाल आयताकार मंच।",

stagePoint3:
    "प्राकृतिक ताजे फूलों एवं हरी पत्तियों की सुरुचिपूर्ण नक्काशी से सजा सुंदर मंच।",

stagePoint4:
    "मंच पर आकर्षक प्रवेश हेतु ग्लास वॉकवे, स्मोक (धुंध प्रभाव) एवं विशेष एंट्री व्यवस्था।",

stagePoint5:
    "मंच के ठीक समीप शानदार डांस फ्लोर और उच्च गुणवत्ता वाली डीजे साउंड प्रणाली।",

stageGalleryLabel:
    "मंच गैलरी",

stageGalleryTitle:
    "मंच की कुछ झलकियाँ",

        exploreSpace:
            "विवरण देखें →",


        amenitiesLabel:
            "आपकी सभी आवश्यकताएँ",

        amenitiesTitle:
            "आपके आराम का पूरा ध्यान",

        acTitle:
            "वातानुकूलित परिसर",

        acDescription:
            "आपके मेहमानों के लिए आरामदायक वातावरण।",

        parkingTitle:
            "पार्किंग सुविधा",

        parkingDescription:
            "मेहमानों के लिए सुविधाजनक पार्किंग व्यवस्था।",

        bridalTitle:
            "दुल्हन कक्ष",

        bridalDescription:
            "दुल्हन और परिवार के लिए निजी स्थान।",

        seatingArenaTitle: "बैठक क्षेत्र",
seatingArenaDescription: "अतिथियों के लिए आरामदायक और व्यवस्थित बैठक व्यवस्था।",

                    /* ---------- FACILITIES PAGE DETAILS ---------- */

        facilitiesMainDescription:
            "आपके खास अवसर को आरामदायक, सुविधाजनक और यादगार बनाने के लिए thoughtfully planned सुविधाएँ।",

        facilityExplore:
            "विवरण देखें →",


        /* ---------- VALET PARKING ---------- */

        valetLabel:
            "वैले पार्किंग",

        valetTitle:
            "आपके मेहमानों के लिए सुविधाजनक पार्किंग",

        valetDescription:
            "कार्यक्रम के दौरान मेहमानों के आगमन और पार्किंग अनुभव को सुविधाजनक और व्यवस्थित रखने के लिए पार्किंग सहायता उपलब्ध है।",

        valetPointsTitle:
            "आपको क्या सुविधाएँ मिलेंगी",

        valetPoint1:
            "मेहमानों के आगमन के समय पार्किंग सहायता उपलब्ध रहेगी।",

        valetPoint2:
            "पार्किंग प्रक्रिया को व्यवस्थित रखने का प्रयास किया जाता है।",

        valetPoint3:
            "परिसर में 200+ दोपहिया वाहनों (Two-Wheelers) के लिए सुरक्षित एवं व्यवस्थित पार्किंग स्थल।",

        valetPoint4:
            "25+ चार पहिया वाहनों (Cars) के लिए सुगम एवं पर्याप्त पार्किंग की व्यवस्था।",

        valetPoint5:
            "मेहमानों को परिसर तक पहुँचने में अनावश्यक परेशानी न हो, इसका ध्यान रखा जाता है।",

        valetGalleryLabel:
            "वैले पार्किंग गैलरी",

        valetGalleryTitle:
            "सुविधाजनक आगमन का अनुभव",


        /* ---------- BRIDAL ROOM ---------- */

        bridalLabel:
            "दुल्हन कक्ष",

        bridalDetailTitle:
            "दुल्हन और परिवार के लिए निजी स्थान",

        bridalDetailDescription:
            "शादी के खास पलों के बीच दुल्हन और परिवार के लिए एक निजी और आरामदायक स्थान, जहाँ तैयारी और व्यक्तिगत पलों का आनंद लिया जा सके।",

        bridalPointsTitle:
            "दुल्हन कक्ष की सुविधाएँ",

        bridalPoint1:
            "दुल्हन के लिए वातानुकूलित (AC) कक्ष, संलग्न (Attached) शौचालय की सुविधा के साथ।",

        bridalPoint2:
            "परिवार और रिश्तेदारों के विश्राम के लिए आरामदायक AC एवं नॉन-AC कमरे।",

        bridalPoint3:
            "पूर्णतः निजी, शांत और सुरक्षित परिसर जहाँ परिवार सुकून से समय बिता सके।",


        bridalPoint4:
        "मेकअप, ड्रेसिंग और अंतिम तैयारी के लिए उपयोगी स्थान।",
        bridalPoint5:
        "प्रत्येक कक्ष में स्वच्छ, आरामदायक बिस्तर एवं उच्च गुणवत्ता वाले गद्दों की पूर्ण व्यवस्था।",


        bridalGalleryLabel:
            "दुल्हन कक्ष गैलरी",

        bridalGalleryTitle:
            "खास पलों के लिए एक विशेष स्थान",


        /* ---------- SEATING ARENA ---------- */

        seatingArenaLabel: "बैठक क्षेत्र",
seatingArenaDetailTitle: "अतिथियों के लिए आरामदायक बैठक की व्यवस्था",
seatingArenaDetailDescription: "कार्यक्रम के दौरान सभी मेहमानों के आराम और सुविधा के लिए विशाल एवं सुनियोजित बैठक व्यवस्था।",
seatingArenaPointsTitle: "बैठक व्यवस्था की विशेषताएं",
seatingArenaPoint1: "अतिथियों की सुविधा हेतु उच्च गुणवत्ता वाले आरामदायक सोफे और आकर्षक ड्रॉइंग टेबल।",
seatingArenaPoint2: "उच्च गुणवत्ता वाले कुर्सियों का संयोजन।",
seatingArenaPoint3: "भव्य रोशनी और सुरुचिपूर्ण सजावट से सुसज्जित विशेष (VIP) अतिथि कक्ष।",
seatingArenaPoint4: "अतिथि कक्षों में सुगम एवं त्वरित वेटर (कमरा सेवा) की विशेष सुविधा।",
seatingArenaPoint5: "वरिष्ठ नागरिकों और परिवार के लिए विशेष आरक्षित स्थान।",
seatingArenaGalleryLabel: "बैठक क्षेत्र गैलरी",
seatingArenaGalleryTitle: "एक आरामदायक अनुभव",


        galleryLabel:
            "हमारी यादें",

        galleryTitle:
            "जहाँ हर तस्वीर एक याद बन जाए",

        galleryDescription:
            "स्थान, मंच, बैठने की व्यवस्था और समारोह की कुछ खास झलकियाँ।",


        contactLabel:
            "अपने उत्सव की योजना बनाएँ",

        contactTitle:
            "आपका खास दिन यहीं से शुरू हो।",

        contactDescription:
            "स्थान देखने या बुकिंग की जानकारी के लिए हमसे संपर्क करें।",

        contactButton:
            "हमसे संपर्क करें",

        footerText:
            "आपके खास पलों को खूबसूरती के साथ यादगार बनाते हुए.",


        /* ---------- ABOUT PAGE ---------- */

        aboutLabel:
            "हमारे बारे में",

        aboutTitle:
            "साधना उत्सव वाटिका",

        aboutIntro:
            "जहाँ समारोह केवल आयोजन नहीं, बल्कि यादें बन जाते हैं।",

        storyLabel:
            "हमारी कहानी",

        storyTitle:
            "खुशियों के सफर का एक हिस्सा",

        storyText:
            "साधना उत्सव वाटिका का उद्देश्य परिवारों को उनके खास अवसरों के लिए एक आरामदायक, सुंदर और यादगार स्थान प्रदान करना है।",

        leadershipLabel:
            "हमारा नेतृत्व",

        ownerTitle:
            "मालिक",

        ownerName:
            "श्री संजय कुमार कुशवाहा",

        ownerText:
            "मैंने साधना उत्सव वाटिका की शुरुआत इस सोच के साथ की थी कि हर परिवार अपने खास पलों का बिना किसी तनाव के आनंद ले सके। मेरा मुख्य ध्यान हमेशा बेहतरीन आतिथ्य, शानदार सेवा और एक खुशनुमा माहौल देने पर रहता है। मेरे और मेरी टीम के लिए, आपका आयोजन केवल एक कार्यक्रम नहीं है, बल्कि एक यादगार अनुभव है जिसे हम पूरी लगन से सफल बनाते हैं। हम सबकी इसी लगन के कारण आज यह स्थान इस क्षेत्र का सबसे विश्वसनीय और पसंदीदा आयोजन स्थल बन चुका है।",

        teamLabel:
            "हमारी टीम",

        managerTitle:
            "प्रबंधक",

        managerName:
            "प्रबंधक का नाम",

        managerText:
            "यहाँ प्रबंधक के बारे में वास्तविक जानकारी लिखी जाएगी।",

        experienceLabel:
            "हमारा अनुभव",

        experienceTitle:
            "अनुभव जो मायने रखता है",

        years:
            "वर्षों का अनुभव",

        events:
            "आयोजित कार्यक्रम",

        bestService:
            "शहर में बेहतरीन सेवा",

        celebrations:
            "समारोह पर पूरा ध्यान",

            specialFacilities: "विशेष सुविधाएं",
    specialFacilitiesHeading: "विशेष सुविधाएं",
    sfNote1: "साइलेंट जनरेटर के साथ 24/7 निर्बाध पावर बैकअप।",
    sfNote2: "24 घंटे स्वच्छ, शुद्ध एवं सुरक्षित पेयजल (Drinking Water) की निरंतर उपलब्धता।",
    sfNote3: "आपके सुझावों और प्राथमिकताओं के अनुसार मंच व परिसर की अनुकूलित (Customized) सजावट।",
    sfNote4: "मांग अनुसार सेल्फी पॉइंट, स्वागतकर्ता (Welcomers) एवं डीजे (DJ) संगीत की विशेष व्यवस्था।",
    sfNote5: "समर्पित पेशेवर सुरक्षा कर्मचारी और सीसीटीवी निगरानी।",
    sfNote6: "इन-हाउस प्रीमियम केटरिंग और अनुकूलन योग्य भोजन मेनू विकल्प।",

    backButton:
    "वापस",

mainHallPageTitle:
    "मुख्य हॉल | साधना उत्सव वाटिका",

mainHallPageLabel:
    "मुख्य हॉल",

mainHallPageTitleText:
    "मुख्य हॉल",

mainHallPageDescription:
    "शादी, रिसेप्शन, जन्मदिन, सगाई, हल्दी, मेहंदी और सभी मांगलिक कार्यक्रमों के लिए आदर्श।",

diningPageTitle:
    "भोजन क्षेत्र | साधना उत्सव वाटिका",

diningPageLabel:
    "भोजन क्षेत्र",

diningPageTitleText:
    "भोजन क्षेत्र",

diningPageDescription:
    "आपके समारोह के दौरान आरामदायक भोजन सेवा के लिए अलग भोजन क्षेत्र।",

stagePageTitle:
    "मंच | साधना उत्सव वाटिका",

stagePageLabel:
    "मंच",

stagePageTitleText:
    "मंच",

stagePageDescription:
    "शादियों, कार्यक्रमों और खास अवसरों के लिए उपयुक्त आउटडोर समारोह क्षेत्र।",

    bookingEnquiryNav: "बुकिंग पूछताछ",
        calendarSubtitle: "तारीख उपलब्धता",
        calendarTitle: "हॉल की उपलब्धता जांचें",
        calendarDesc: "अपने उत्सव के लिए माह और वर्ष चुनकर आरक्षित तिथियों की जांच करें।",
        selectMonthLabel: "माह चुनें:",
        selectYearLabel: "वर्ष चुनें:",
        legendBooked: "आरक्षित (तारीख उपलब्ध नहीं है)",
        legendAvailable: "उपलब्ध (बुकिंग के लिए रिक्त)",
        calendarNote: "किसी भी उपलब्ध तिथि को आरक्षित करने के लिए नीचे दिए गए विवरण से संपर्क करें।",
        contactHeading: "संपर्क करें",
callUs: "कॉल करें",
whatsappTitle: "व्हाट्सएप",
whatsappDesc: "बुकिंग और प्राइसिंग के लिए हमें मैसेज करें",
addressTitle: "पता",
visitingHoursTitle: "वेन्यू देखने का समय",
visitingHoursDesc: "सुबह 07:00 बजे से रात 07:00 बजे तक (रोज़ाना)"
    }
};

/* ================= CHANGE LANGUAGE ================= */

function changeLanguage(language) {

    // Save language globally for the whole website
    activeLanguage = language;
    localStorage.setItem("selectedLanguage", language);


    // Translate all elements on the current page
    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.dataset.key;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });


    // Update active language buttons
    document.querySelectorAll(".language").forEach(button => {
        button.classList.remove("active");
    });


    if (language === "hinglish") {

        document.querySelectorAll(
            "#hinglishBtn, #mobileHinglishBtn"
        ).forEach(button => {
            button.classList.add("active");
        });

    }


    if (language === "hindi") {

        document.querySelectorAll(
            "#hindiBtn, #mobileHindiBtn"
        ).forEach(button => {
            button.classList.add("active");
        });

    }


    // Update browser language
    document.documentElement.lang =
        language === "hindi" ? "hi" : "en";


    // Update calendar if this page has one
    setupCalendarDropdowns();
    renderCalendar();
}

/* ================= DESKTOP LANGUAGE ================= */

document.querySelector("#hinglishBtn")
    ?.addEventListener("click", () => {

        changeLanguage("hinglish");

    });


document.querySelector("#hindiBtn")
    ?.addEventListener("click", () => {

        changeLanguage("hindi");

    });


/* ================= MOBILE LANGUAGE ================= */

document.querySelector("#mobileHinglishBtn")
    ?.addEventListener("click", () => {

        changeLanguage("hinglish");

        closeMobileMenu();

    });


document.querySelector("#mobileHindiBtn")
    ?.addEventListener("click", () => {

        changeLanguage("hindi");

        closeMobileMenu();

    });


/* ================= MOBILE MENU CONTROLLER ================= */

const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuButton && mobileMenu) {
    // 1. Open / close hamburger menu
    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle("active"); // <-- CHANGED HERE
    });

    // 2. Auto-close when any link inside mobile menu is tapped
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active"); // <-- CHANGED HERE
        });
    });

    // 3. Auto-close when language buttons inside mobile menu are tapped
    mobileMenu.querySelectorAll(".language").forEach(btn => {
        btn.addEventListener("click", () => {
            mobileMenu.classList.remove("active"); // <-- CHANGED HERE
        });
    });

    // 4. Auto-close if clicked outside the open menu
    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove("active"); // <-- CHANGED HERE
        }
    });
}

/* ================= CLOSE MOBILE MENU ================= */

function closeMobileMenu() {

    mobileMenu?.classList.remove(
        "mobile-menu-open"
    );

}


/*
   Close the menu whenever a navigation
   link is clicked.
*/

document.querySelectorAll(
    "#mobileMenu a"
).forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* ================= LOAD SAVED LANGUAGE ================= */

/*
   Check whether the user selected a language
   on another page.

   If nothing has been selected yet,
   Hinglish is used as the default.
*/

const savedLanguage =
    localStorage.getItem("selectedLanguage");


if (savedLanguage === "hindi") {

    changeLanguage("hindi");

} else {

    changeLanguage("hinglish");

}

/* ================= CALENDAR ENGINE ================= */

function setupCalendarDropdowns() {
    const monthSelect = document.getElementById("monthSelect");
    const yearSelect = document.getElementById("yearSelect");
    if (!monthSelect || !yearSelect) return;

    // Update month names dynamically if language changes
    if (typeof calendarI18n !== "undefined" && calendarI18n[activeLanguage]) {
        const months = calendarI18n[activeLanguage].months;
        Array.from(monthSelect.options).forEach((opt, idx) => {
            if (months[idx]) opt.textContent = months[idx];
        });
    }

    monthSelect.onchange = (e) => {
        activeCalMonth = parseInt(e.target.value);
        renderCalendar();
    };

    yearSelect.onchange = (e) => {
        activeCalYear = parseInt(e.target.value);
        renderCalendar();
    };
}

function renderCalendar() {
    const grid = document.getElementById("calendarGrid");
    const titleEl = document.getElementById("currentCalendarDisplay");
    if (!grid) return;

    grid.innerHTML = "";

    const monthNames = calendarI18n[activeLanguage].months;
    const weekdays = calendarI18n[activeLanguage].weekdays;

    if (titleEl) {
        titleEl.textContent = `${monthNames[activeCalMonth]} ${activeCalYear}`;
    }

    weekdays.forEach(day => {
        const headerDiv = document.createElement("div");
        headerDiv.className = "calendar-weekday";
        headerDiv.textContent = day;
        grid.appendChild(headerDiv);
    });

    const firstDayIndex = new Date(activeCalYear, activeCalMonth, 1).getDay();
    const totalDays = new Date(activeCalYear, activeCalMonth + 1, 0).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.className = "calendar-day-box empty";
        grid.appendChild(emptyDiv);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "calendar-day-box";

        const formattedMonth = String(activeCalMonth + 1).padStart(2, "0");
        const formattedDay = String(day).padStart(2, "0");
        const dateKey = `${activeCalYear}-${formattedMonth}-${formattedDay}`;

        // STEP 4 UPDATE: Check the dictionary for 'afternoon' or 'night'
        const bookingType = bookedDates[dateKey];

        if (bookingType) {
            dayDiv.classList.add("is-booked");
            
            // Assign the correct color class based on the time of day
            const badgeClass = bookingType === "afternoon" ? "badge-afternoon" : "badge-night";
            
            dayDiv.innerHTML = `
                <span class="day-num">${day}</span>
                <span class="booked-badge ${badgeClass}">✓</span>
            `;
        } else {
            dayDiv.innerHTML = `<span class="day-num">${day}</span>`;
        }

        grid.appendChild(dayDiv);
    }
}

// Initialize calendar setup on page load
setupCalendarDropdowns();
renderCalendar();

/* ================= SCROLL & CLICK HIGHLIGHT ================= */
function updateActiveNavbar() {
    const currentPath = window.location.pathname;
    const allNavLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

    // 1. Check if we are on separate pages (About Us or Booking)
    allNavLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (!href) return;

        // If we are on the About page, highlight About Us
        if (currentPath.includes("about.html") && href === "about.html") {
            link.classList.add("active");
        }
        // If we are on the Booking page, highlight Booking Enquiry
        else if (currentPath.includes("booking.html") && href === "booking.html") {
            link.classList.add("active");
        }
        // Otherwise, handle homepage scrolling sections
        else if (currentPath.endsWith("index.html") || currentPath === "/" || currentPath === "") {
            let currentSection = "";
            
            allNavLinks.forEach(navLink => {
                const navHref = navLink.getAttribute("href");
                if (navHref && navHref.includes("#")) {
                    const sectionId = navHref.substring(navHref.indexOf("#") + 1);
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const sectionTop = section.offsetTop;
                        if (window.scrollY >= (sectionTop - 150)) {
                            currentSection = sectionId;
                        }
                    }
                }
            });

            // Highlight Home if at the very top of the homepage
            if (window.scrollY < 100) {
                if (href === "index.html" || href === "#" || href === "/") {
                    link.classList.add("active");
                }
            } 
            // Highlight active section on scroll
            else if (currentSection && href.includes("#" + currentSection)) {
                link.classList.add("active");
            }
        }
    });
}

// Run when page loads and when scrolling
window.addEventListener("DOMContentLoaded", updateActiveNavbar);
window.addEventListener("scroll", updateActiveNavbar);

/* ================= LIGHTBOX POPUP LOGIC ================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// 1. Automatically find all gallery images
const galleryImages = document.querySelectorAll(".facility-image img, .space-image img, .gallery-section img");

// 2. When any image is clicked, open the popup
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        image.style.cursor = "pointer"; // Makes it look clickable
        lightbox.style.display = "flex"; // Show the dark background
        lightboxImg.src = image.src; // Put the clicked image into the popup
    });
});

// 3. Close the popup when the 'X' is clicked
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

// 4. Close the popup if the user clicks the dark background
if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
}

// Force refresh if navigating back from a sub-page via BFCache
window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        // This detects if the user used the Back button, and silently reloads 
        // the page to fetch the updated language from localStorage.
        window.location.reload();
    }
});