const sampleListing = [
        {
            title: "Cozy Apartment in the Heart of Paris",
            description: "Charming apartment located in the lively Marais district.",
            image: {
                filename: "listingimage",
                url: "https://www.cuvee.com/files/2020/09/Wings-4-scaled-1.jpg",
            },
            price: 100,
            location: "Paris",
            country: "France",
            geometry: {
                type: "Point",
                coordinates: [2.3522, 48.8566] // [longitude, latitude] for Paris
            }
        },
        {
            title: "Luxurious Beachfront Villa",
            description: "Spacious villa with stunning ocean views and private beach access.",
            image: {
                filename: "listingimage",
                url: "https://sjvillas.co.uk/wp-content/uploads/2020/03/kanda-villa-025-scaled-1.jpg",
            },
            price: 300,
            location: "Maui",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-156.7875, 20.7984] // [longitude, latitude] for Maui
            }
        },
        {
            title: "Mountain Retreat Cabin",
            description: "Rustic cabin nestled in the mountains, perfect for a peaceful getaway.",
            image: {
                filename: "listingimage",
                url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a1dc1c75940381.5c5afffec27e9.jpg",
            },
            price: 80,
            location: "Aspen",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-106.8236, 39.1911] // [longitude, latitude] for Aspen
            }
        },
        {
            title: "Sunny Studio in Barcelona",
            description: "Bright studio apartment with balcony overlooking the city.",
            image: {
                filename: "listingimage",
                url:"https://www.loyalvillasluxury.com/wp-content/uploads/2017/08/main_villa_elia_estate.jpg",
            },
            price: 90,
            location: "Barcelona",
            country: "Spain",
            geometry: {
                type: "Point",
                coordinates: [2.1734, 41.3851] // [longitude, latitude] for Barcelona
            }
        },
        {
            title: "Secluded Cottage in the Cotswolds",
            description: "Quaint cottage surrounded by rolling hills and picturesque countryside.",
            image: {
                filename: "listingimage",
                url: "https://wallpapercave.com/wp/wp7111679.jpg",
            },
            price: 120,
            location: "Cotswolds",
            country: "UK",
            geometry: {
                type: "Point",
                coordinates: [-1.9922, 51.9284] // [longitude, latitude] for Cotswolds
            }
        },
        {
            title: "Modern Loft in Downtown Manhattan",
            description: "Sleek loft space with skyline views and contemporary design.",
            image: {
                filename: "listingimage",
                url:"https://i.pinimg.com/originals/9b/84/cc/9b84cc02a86729219169d8b9a64eb2b5.jpg",
            },
            price: 200,
            location: "New York City",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-74.006, 40.7128] // [longitude, latitude] for New York City
            }
        },
        {
            title: "Riverside Chalet in the Swiss Alps",
            description: "Cosy chalet with stunning views of the river and surrounding mountains.",
            image: {
                filename: "listingimage",
                url:"https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/88/2019/04/25034237/V-Villas-Hua-Hin_ThreeBedroomPoolVilla01.jpg",
            },
            price: 150,
            location: "Interlaken",
            country: "Switzerland",
            geometry: {
                type: "Point",
                coordinates: [7.8691, 46.6765] // [longitude, latitude] for Interlaken
            }
        },
        {
            title: "Seaside Cottage in Cape Town",
            description: "Quaint cottage with breathtaking views of the ocean and Table Mountain.",
            image: {
                filename: "listingimage",
                url: "https://d1qfj231ug7wdu.cloudfront.net/pictures/estate/3067/3066371/5206512365cf53cb958ec36.31892150_582ba9a7f0_980.jpg",
            },
            price: 150,
            location: "Cape Town",
            country: "South Africa",
            geometry: {
                type: "Point",
                coordinates: [18.4241, -33.9249] // [longitude, latitude] for Cape Town
            }
        },
        {
            title: "Modern Apartment in Dubai Marina",
            description: "Sleek and luxurious apartment overlooking the marina with access to top amenities.",
            image: {
                filename: "listingimage",
                url:"https://media.inmobalia.com/imgV1/B8vEv5Xh~qyN2De0~3A5ifIFwZJ8scFNRDhubtxoND5f3I_nymruYnTNEYCp~uCKjKLHekKkdXm3R79x3o3OOrZgVyHHPUfs~p_gatNdaMnzf0GwmPI9uel203u32bP3z0IfZ3C0la9oGjsohNJ3bIccc95GG0eHI3oIzxQ60IzhLG~ZeTaiU836dSYBnE9VQvr~vkTUIR2ERgpvuhMvHMyWmksje_qa564QlYFihDGlf9QiDnfbZN_eTJa69KwngILRlGF0PU_7XrkW022ganXrVlX~qnD5VLerKOLNGeIaDFwGuQkEBXVAT9ouw63zjtbHQLAGMqZ78P7oun9dswCQGSiPh9qgCkuweB6k7GT42WUf.jpg",
            },
            price: 250,
            location: "Dubai",
            country: "UAE",
            geometry: {
                type: "Point",
                coordinates: [55.0686, 25.0777] // [longitude, latitude] for Dubai
            }
        },
        {
            title: "Historic Townhouse in Charleston",
            description: "Elegant townhouse with historic charm located in the heart of downtown Charleston.",
            image: {
                filename: "listingimage",
                url:"https://homelord.com/PublicFiles/Project10227/CAM_FRONTAL.jpg?width=700&height=580&mode=crop",
            },
            price: 180,
            location: "Charleston",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-79.9311, 32.7765] // [longitude, latitude] for Charleston
            }
        },
        {
            title: "Rural Farmhouse in Tuscany",
            description: "Authentic farmhouse surrounded by vineyards and olive groves, perfect for a peaceful retreat.",
            image: {
                filename: "listingimage",
                url: "https://www.playagrande.com/imager/images/6601/Contemporary_Style_1_View_2_Ponciana_RE_CMYK_c04766ce9d5593d9fb5a02e1dd8ec3f6.jpg",
            },
            price: 120,
            location: "Tuscany",
            country: "Italy",
            geometry: {
                type: "Point",
                coordinates: [11.2558, 43.7696] // [longitude, latitude] for Tuscany
            }
        },
        {
            title: "Ski Chalet in Lake Louise",
            description: "Cozy chalet nestled in the Canadian Rockies, just minutes away from world-class skiing.",
            image: {
                filename: "listingimage",
                url:"https://static.propsearch.ae/dubai-locations/ellington-villa-collection-at-la-mer_oI6by.jpg",
            },
            price: 200,
            location: "Lake Louise",
            country: "Canada",
            geometry: {
                type: "Point",
                coordinates: [-116.1770, 51.4254] // [longitude, latitude] for Lake Louise
            }
        },
        {
            title: "Beachfront Villa in Koh Samui",
            description: "Luxurious villa with private beach access and infinity pool overlooking the Gulf of Thailand.",
            image: {
                filename: "listingimage",
                url: "https://uncrate.com/assets_c/2023/01/villa-paradiso-2-thumb-960xauto-156770.jpg",
            },
            price: 300,
            location: "Koh Samui",
            country: "Thailand",
            geometry: {
                type: "Point",
                coordinates: [100.0370, 9.5120] // [longitude, latitude] for Koh Samui
            }
        },
        {
            title: "Urban Loft in Melbourne",
            description: "Stylish loft apartment located in Melbourne's vibrant CBD with trendy cafes and boutiques nearby.",
            image: {
                filename: "listingimage",
                url:"https://sdhstudio.com/wp-content/uploads/2020/06/5-scaled.jpg",
            },
            price: 180,
            location: "Melbourne",
            country: "Australia",
            geometry: {
                type: "Point",
                coordinates: [144.9631, -37.8136] // [longitude, latitude] for Melbourne
            }
        },
        {
            title: "Historic Townhouse in Edinburgh",
            description: "Elegant townhouse dating back to the 18th century, located in the heart of the city.",
            image: {
                filename: "listingimage",
                url: "https://marbella.studio/wp-content/uploads/2023/03/Nueva-casaa-molona-scaled.jpg",
            },
            price: 180,
            location: "Edinburgh",
            country: "UK",
            geometry: {
                type: "Point",
                coordinates: [-3.1883, 55.9533] // [longitude, latitude] for Edinburgh
            }
        },
        {
            title: "Tropical Bungalow in Bali",
            description: "Private bungalow surrounded by lush gardens and just steps from the beach.",
            image: {
                filename: "listingimage",
                url: "https://images.squarespace-cdn.com/content/v1/5de3da8f8b6b2f5e3034b8c9/306ee47c-9b97-49eb-82a4-ad13b42df23b/06_edit_SideB.jpg",
            },
            price: 120,
            location: "Ubud",
            country: "Indonesia",
            geometry: {
                type: "Point",
                coordinates: [115.2093, -8.5193] // [longitude, latitude] for Ubud
            }
        },
        {
            title: "Charming Cottage in Provence",
            description: "Idyllic cottage with vineyard views and a private pool.",
            image: {
                filename: "listingimage",
                url: "https://luxury-houses.net/wp-content/uploads/2021/02/Exceptional-La-Collina-Villa-Design-Concept-by-CLR-Design-Group-10-800x450.jpg",
            },
            price: 160,
            location: "Provence",
            country: "France",
            geometry: {
                type: "Point",
                coordinates: [5.0101, 43.9793] // [longitude, latitude] for Provence
            }
        },
        {
            title: "Ski-in/Ski-out Chalet in Whistler",
            description: "Luxurious chalet with direct access to the slopes and mountain views.",
            image: {
                filename: "listingimage",
                url:"https://th.bing.com/th/id/R.11f731bbd2873f053162c34fa8290fd5?rik=icVk0AJMp9oQzA&riu=http%3a%2f%2fmessagenote.com%2fwp-content%2fuploads%2f2011%2f04%2ftruscany-villa.jpg&ehk=8iTNr8kqps7FTKvrlSCs3v6i0TnlT538id7qzYuWQl0%3d&risl=&pid=ImgRaw&r=0",
            },
            price: 250,
            location: "Whistler",
            country: "Canada",
            geometry: {
                type: "Point",
                coordinates: [-122.9574, 50.1163] // [longitude, latitude] for Whistler
            }
        },
        {
            title: "Modern Apartment in Tokyo",
            description: "Sleek and stylish apartment in the bustling Shibuya district.",
            image: {
                filename: "listingimage",
                url:"https://foreverdc.com/wp-content/uploads/2019/09/dubai-villa.jpg",
            },
            price: 110,
            location: "Tokyo",
            country: "Japan",
            geometry: {
                type: "Point",
                coordinates: [139.6917, 35.6895] // [longitude, latitude] for Tokyo
            }
        },
    
        {
            title: "Seaside Villa in Santorini",
            description: "Elegant villa with panoramic views of the Aegean Sea and private infinity pool.",
            image: {
                filename: "listingimage",
                url:"https://pix10.agoda.net/hotelImages/150/1505038/1505038_16092013520046659108.jpg",
            },
            price: 300,
            location: "Santorini",
            country: "Greece",
            geometry: {
                type: "Point",
                coordinates: [25.4284, 36.3932] // [longitude, latitude] for Santorini
            }
        },
        {
            title: "Cosy Cabin in the Canadian Rockies",
            description: "Rustic cabin surrounded by breathtaking mountain scenery.",
            image: {
                filename: "listingimage",
                url:"https://www.elitehavens.com/magazine/wp-content/uploads/2021/05/Header.jpg",
            },
            price: 90,
            location: "Banff",
            country: "Canada",
            geometry: {
                type: "Point",
                coordinates: [-115.5667, 51.1784] // [longitude, latitude] for Banff
            }
        },
        {
            title: "Beach House in Byron Bay",
            description: "Relaxed beach house with ocean views and direct beach access.",
            image: {
                filename: "listingimage",
                url: "https://www.deliciousitaly.com/media/k2/galleries/2035/Villatravellers-Megara.jpg",
            },
            price: 180,
            location: "Byron Bay",
            country: "Australia",
            geometry: {
                type: "Point",
                coordinates: [153.6021, -28.6474] // [longitude, latitude] for Byron Bay
            }
        },
        {
            title: "Historic Apartment in Rome",
            description: "Charming apartment in a historic building near the Colosseum.",
            image: {
                filename: "listingimage",
                url:"https://i.pinimg.com/originals/64/a9/3a/64a93ac64b596fcccdecbeaf39895b39.jpg",
            },
            price: 130,
            location: "Rome",
            country: "Italy",
            geometry: {
                type: "Point",
                coordinates: [12.4964, 41.9028] // [longitude, latitude] for Rome
            }
        },
        {
            title: "Lakefront Cabin in Lake Tahoe",
            description: "Quaint cabin with stunning views of Lake Tahoe and access to outdoor activities.",
            image: {
                filename: "listingimage",
                url:"https://www.architectureartdesigns.com/wp-content/uploads/2017/06/1E0A5677__A-1024x683.jpg",
            },
            price: 150,
            location: "Lake Tahoe",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-120.0324, 39.0968] // [longitude, latitude] for Lake Tahoe
            }
        },
        {
            title: "Urban Loft in Berlin",
            description: "Modern loft space in the vibrant Kreuzberg neighborhood.",
            image: {
                filename: "listingimage",
                url:"https://wallup.net/wp-content/uploads/2019/09/977995-mansion-house-architecture-luxury-building-design.jpg",
            },
            price: 95,
            location: "Berlin",
            country: "Germany",
            geometry: {
                type: "Point",
                coordinates: [13.4050, 52.5200] // [longitude, latitude] for Berlin
            }
        },
        {
            title: "Luxury Penthouse in Sydney",
            description: "Opulent penthouse with panoramic views of Sydney Harbour.",
            image: {
                filename: "listingimage",
                url:"https://imperiobanus.com/wp/wp-content/uploads/2018/04/modern-villa-alqueria-marbella_01.jpg",
            },
            price: 400,
            location: "Sydney",
            country: "Australia",
            geometry: {
                type: "Point",
                coordinates: [151.2093, -33.8688] // [longitude, latitude] for Sydney
            }
        },
        {
            title: "Rustic Farmhouse in Tuscany",
            description: "Charming farmhouse surrounded by olive groves and vineyards.",
            image: {
                filename: "listingimage",
                url:"https://wallpaperaccess.com/full/4722330.jpg",
            },
            price: 170,
            location: "Tuscany",
            country: "Italy",
            geometry: {
                type: "Point",
                coordinates: [11.2558, 43.7696] // [longitude, latitude] for Tuscany
            }
        },
        {
            title: "Coastal Cottage in Cornwall",
            description: "Picturesque cottage with sea views and coastal walks on the doorstep.",
            image: {
                filename: "listingimage",
                url:"https://i.pinimg.com/originals/5b/e6/d8/5be6d8376bad411579270186e5397738.jpg",
            },
            price: 120,
            location: "Cornwall",
            country: "UK",
            geometry: {
                type: "Point",
                coordinates: [-4.2376, 50.2660] // [longitude, latitude] for Cornwall
            }
        },
        {
            title: "Ski Chalet in the French Alps",
            description: "Traditional chalet with wood-burning fireplace and ski-in/ski-out access.",
            image: {
                filename: "listingimage",
                url:"https://pix10.agoda.net/hotelImages/2572060/0/a9ebb03ed89160adbb197d22c13ca7c4.jpg",
            },
            price: 280,
            location: "Chamonix",
            country: "France",
            geometry: {
                type: "Point",
                coordinates: [6.8656, 45.9237] // [longitude, latitude] for Chamonix
            }
        },
        {
            title: "Secluded Treehouse Retreat",
            description: "Magical treehouse nestled in the forest canopy, perfect for nature lovers.",
            image: {
                filename: "listingimage",
                url:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a7e4f52079699.590384741bb83.jpg",
            },
            price: 120,
            location: "Redwood National Park",
            country: "USA",
            geometry: {
                type: "Point",
                coordinates: [-124.0003, 41.2132] 
            }
       }
];

module.exports = { data: sampleListing };
