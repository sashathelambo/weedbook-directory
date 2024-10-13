document.addEventListener('DOMContentLoaded', function() {
            const vendorSelect = document.querySelector('#vendor-select');
            const vendorData = {
                'Got The Loud': {
                    link: 'https://gottheloud.com/product-category/concentrate/',
                    coupons: []
                },
                'Woodstock Hemp': {
                    link: 'https://woodstockhempcompany.com/products/thca-liquid-diamond-live-resin-1-0g-cartridge',
                    coupons: []
                },
                'The Hemp Barn': {
                    link: 'https://www.thehempbarn.com/product/disposable-vape-1ml/',
                    coupons: []
                },
                'The Hemp Collect': {
                    link: 'https://thehempcollect.com/products/thca-live-resin-cartridge-indica',
                    coupons: []
                },
                'CannaHaus Farms': {
                    link: 'https://cannahausfarms.com/collections/extracts/products/thca-live-hash-rosin?variant=43380202635422',
                    coupons: []
                },
                'Well Fed Wolf': {
                    link: 'https://www.wellfedwolf.com/s/order',
                    coupons: []
                },
                'Dr. Ganja': {
                    link: 'https://www.drganja.com',
                    coupons: []
                },
                'Canna Crunchers CBD': {
                    link: 'https://cannacruncherscbd.com/',
                    coupons: []
                },
                'Hemp Hop': {
                    link: 'https://hemphop.co/collections/delta-8-thc-cbd-vape-cartridge',
                    coupons: []
                },
                'Jamn Hemp Co': {
                    link: 'https://jamnhempco.com/product-category/thca/',
                    coupons: []
                },
                'Arete Hemp': {
                    link: 'https://aretehemp.com/product-category/vape/vape-thca/',
                    coupons: []
                },
                'Crysp': {
                    link: 'https://crysp.co/cs/1714/',
                    coupons: []
                },
                'Sticky Buds': {
                    link: 'https://sticky-buds.com/product/mandarin-cookies-live-hash-rosin-5-cart/',
                    coupons: []
                },
                'Akira Botanicals': {
                    link: 'https://www.akirabotanicals.com/',
                    coupons: []
                },
                'Savvy Source': {
                    link: 'https://savvysource.info/',
                    coupons: []
                },
                'Black Owl Hemp Clinic': {
                    link: 'https://blackowlhempclinic.com/collections',
                    coupons: []
                },
                'Official Push Product': {
                    link: 'https://officialpushproduct.com/tanks/',
                    coupons: []
                },
                'Well Crafted Canna': {
                    link: 'https://www.wellcraftedcanna.com/product-page/1g-thca-carts',
                    coupons: []
                },
                'Rush Hemp Farms': {
                    link: 'https://rushhempfarms.com/',
                    coupons: []
                },
                'Piur Select': {
                    link: 'https://www.piurselect.com/',
                    coupons: []
                },
                'Tribal': {
                    link: 'https://www.tribal.ca/ark',
                    coupons: []
                },
                'Holistic Hope': {
                    link: 'https://www.holistichopefl.com/online-store/Vapor-c40266049',
                    coupons: []
                },
                'Broccoli Hemp Company': {
                    link: 'https://www.broccolihempcompany.com/',
                    coupons: []
                },
                'Grinder Spoons': {
                    link: 'https://www.grinderspoons.com',
                    coupons: []
                },
                'Fire Hemp Farms': {
                    link: 'https://firehempfarms.com/vapes',
                    coupons: []
                },
                'The Southern Hemp Collective': {
                    link: 'https://www.thesouthernhempcollective.com/s/shop',
                    coupons: []
                },
                'Southern Harvest Hemp': {
                    link: 'https://southernharvesthemp.com/',
                    coupons: []
                },
                'Handcrafted Farmers': {
                    link: 'https://handcraftedfarmers.com/',
                    coupons: []
                },
                'Peace Out Malaise CBD': {
                    link: 'https://www.peaceoutmalaisecbd.com/',
                    coupons: []
                },
                'Galaxy Groves': {
                    link: 'https://galaxygroves.com/',
                    coupons: []
                },
                'Roz From Frasier': {
                    link: 'https://www.rozfromfrasier.com/s/shop',
                    coupons: []
                },
                'Hello Mary': {
                    link: 'https://hellomary.com/',
                    coupons: []
                },
                'Flow Gardens': {
                    link: 'https://flowgardens.com/',
                    coupons: []
                },
                'Lit Farms': {
                    link: 'https://litfarms.com/',
                    coupons: []
                },
                'Wildflower Hemp Co': {
                    link: 'https://www.wildflowerhempco.com/',
                    coupons: []
                },
                'WNC CBD': {
                    link: 'https://wnc-cbd.com/',
                    coupons: []
                },
                'Lucky Elk': {
                    link: 'https://luckyelk.com/',
                    coupons: []
                },
                'CW Ventures': {
                    link: 'https://www.cwventuresllctn.com/',
                    coupons: []
                },
                'Cowboy Cannabis': {
                    link: 'https://www.cowboycannabistn.net/s/shop',
                    coupons: []
                },
                'J Littys': {
                    link: 'https://jlittys.com/',
                    coupons: []
                },
                'Deep Woods': {
                    link: 'https://www.deepwoodsok.com/shop',
                    coupons: []
                },
                'Amish Grown': {
                    link: 'https://www.amishgrown.com/s/shop',
                    coupons: []
                },
                'Andaway Gardens': {
                    link: 'https://www.andawaygardens.com/s/shop',
                    coupons: []
                },
                'Toke Sugar': {
                    link: 'https://tokesugar.com/shop/vapes/',
                    coupons: []
                },
                'Golden Hour Hemp': {
                    link: 'https://goldenhourhemp.com/thca-cartridge/#tab-reviews',
                    coupons: []
                },
                'I Am Hemp': {
                    link: 'https://www.iamhemp.co/products/carts',
                    coupons: []
                },
                'My Qwin': {
                    link: 'https://www.myqwin.com/',
                    coupons: []
                },
                'Asheville Extracts': {
                    link: 'https://ashevilleextracts.square.site/shop/concentrates/4',
                    coupons: []
                },
                'Veteran Grown Hemp': {
                    link: 'https://www.veterangrownhemp.com/flower',
                    coupons: []
                },
                'Veteran Grown LLC': {
                    link: 'https://www.veterangrownllc.com/online-store/Delta-8-Cartridge-p442370756',
                    coupons: []
                },
                'The Highway Hemp': {
                    link: 'https://www.thehighwayhemp.co/category/flower',
                    coupons: []
                },
                'Yaga Farms': {
                    link: 'https://www.yagafarms.com/products/420-exclusive?variant=48874482008361',
                    coupons: []
                },
                'Cosmic Hemp Gardens': {
                    link: 'https://www.cosmichempgardens.com/',
                    coupons: []
                },
                'Best Buds BFF': {
                    link: 'https://bestbudsbff.com/hemp-shop/high-thca-hemp-flower/exotic-thca-hemp-flower/',
                    coupons: []
                },
                'Buy Terp Boys': {
                    link: 'https://buyterpboys.com/collections/thca-flower',
                    coupons: []
                },
                'THCA Flower Online': {
                    link: 'https://www.thcaflower.online/',
                    coupons: []
                },
                'Quantum Exotics': {
                    link: 'https://www.quantumexotics.com/live-rosins',
                    coupons: []
                },
                'Enlighten Hemp Co': {
                    link: 'https://enlightenhempco.com/',
                    coupons: []
                },
                'Herbal Healers CBD': {
                    link: 'https://herbalhealerscbd.com/product-category/hemp-flower/',
                    coupons: []
                },
                'Bearly Legal Hemp': {
                    link: 'https://www.bearlylegalhemp.com/thca-flower-buds-nugs-potent/',
                    coupons: []
                },
                'Canna NC': {
                    link: 'https://cannanc.com/',
                    coupons: []
                },
                'Peace Out Malaise CBD': {
                    link: 'https://www.peaceoutmalaisecbd.com/vapes-concentrates',
                    coupons: []
                },
                'Asheville Extracts': {
                    link: 'https://ashevilleextracts.square.site/s/shop',
                    coupons: []
                },
                'Deep Woods': {
                    link: 'https://www.deepwoodsok.com/',
                    coupons: []
                },
                'Toke Sugar': {
                    link: 'https://tokesugar.com/product/modified-bananas-rosin-5ml/',
                    coupons: []
                },
                'Store 98518760': {
                    link: 'https://store98518760.company.site/products',
                    coupons: []
                },
                'Hemp Hop': {
                    link: 'https://hemphop.co/products/wedding-cake-high-thca-live-resin-vape-cartridge',
                    coupons: []
                },
                'CW Ventures': {
                    link: 'https://www.cwventuresllctn.com/',
                    coupons: []
                },
                'The Delta Connect': {
                    link: 'https://thedeltaconnect.com/products/trap-university-2-gram-thca-liquid-diamond-diaposable',
                    coupons: []
                },
                'The Highway Hemp': {
                    link: 'https://www.thehighwayhemp.co/',
                    coupons: []
                },
                'Black Tie CBD': {
                    link: 'https://blacktiecbd.net/?ref=pifxvgfi',
                    coupons: []
                },
                'Fire Farms': {
                    link: 'https://firefarms.co/',
                    coupons: []
                },
                'Buy THCA': {
                    link: 'https://buythca.com/product/liquid-diamond-carts/',
                    coupons: []
                },
                'Magnet Hemp Co': {
                    link: 'https://www.magnethempco.com/products',
                    coupons: []
                },
                'Astria Farm': {
                    link: 'https://astriafarm.com/thc-a/',
                    coupons: []
                },
                'The SOMD Experience': {
                    link: 'https://thesomdexp.com/?coupon=Juice',
                    coupons: []
                },
                'AVL Dispensary': {
                    link: 'https://avldispensary.com/product-category/thca/thca-live-rosin/',
                    coupons: []
                },
                'Seed Attics': {
                    link: 'https://www.seedattics.com/shop',
                    coupons: []
                },
                'Pine Essence CBD': {
                    link: 'https://pineessencecbd.com/?post_type=product&paged=2',
                    coupons: []
                },
                'Preston Herb Co': {
                    link: 'https://www.prestonherbco.com/',
                    coupons: []
                },
                'Simply Mary': {
                    link: 'https://simplymary.co/',
                    coupons: []
                },
                'Shop Hello Mary': {
                    link: 'https://shophellomary.com',
                    coupons: []
                }
            };

            // Populate the vendor dropdown
            if (vendorSelect) {
                Object.keys(vendorData).sort().forEach(vendor => {
                    const option = document.createElement('option');
                    option.value = vendor;
                    option.textContent = vendor;
                    vendorSelect.appendChild(option);
                });

                vendorSelect.addEventListener('change', function() {
                    const selectedVendor = vendorSelect.value;
                    const vendorInfo = vendorData[selectedVendor];
                    if (vendorInfo) {
                        const modal = document.getElementById('vendor-modal');
                        const modalLink = document.getElementById('modal-vendor-link');
                        const abbreviatedVendorName = selectedVendor.split(' ').map(word => word.charAt(0)).join('');
                        if (modal && modalLink) {
                            modalLink.innerHTML = `<a href="${vendorInfo.link}" target="_blank">${abbreviatedVendorName}</a>`;
                            modal.classList.add('show');
                        }
                    }
                });
            }

            // Modal close functionality
            const modal = document.getElementById('vendor-modal');
            const closeButton = document.querySelector('.close-button');

            if (closeButton && modal) {
                closeButton.addEventListener('click', function() {
                    modal.classList.remove('show');
                });
            }

            window.addEventListener('click', function(event) {
                if (modal && event.target === modal) {
                    modal.classList.remove('show');
                }
            });

            // Age Verification Logic
            const ageVerificationModal = document.querySelector('.age-verification');
            const ageYesButton = document.getElementById('age-yes');
            const ageNoButton = document.getElementById('age-no');

            if (ageVerificationModal) {
                ageVerificationModal.style.display = 'flex';

                if (ageYesButton) {
                    ageYesButton.addEventListener('click', function() {
                        ageVerificationModal.style.display = 'none';
                    });
                }

                if (ageNoButton) {
                    ageNoButton.addEventListener('click', function() {
                        alert('You must be of legal age to enter this site.');
                        window.location.href = 'https://www.google.com';
                    });
                }
            }

            // Vendor Carousel Logic
            const vendorNames = Object.keys(vendorData).sort();

            const vendorSelectElement = document.getElementById('vendor-select');
            if (vendorSelectElement) {
                vendorNames.forEach(vendor => {
                    const option = document.createElement('option');
                    option.value = vendor;
                    option.textContent = vendor;
                    vendorSelectElement.appendChild(option);
                });
            }

            const vendorNameElement = document.getElementById('vendor-name');
            let currentVendorIndex = 0;

            function switchVendor() {
                if (vendorNameElement) {
                    vendorNameElement.style.opacity = 0;
                    setTimeout(() => {
                        currentVendorIndex = (currentVendorIndex + 1) % vendorNames.length;
                        vendorNameElement.textContent = vendorNames[currentVendorIndex];
                        vendorNameElement.style.opacity = 1;
                    }, 500);
                }
            }
            setInterval(switchVendor, 2000); // Switch every 2 seconds
            switchVendor(); // Initial call to display the first vendor immediately

            // New Feature: Display Vendor Details
            const vendorDetailsElement = document.getElementById('vendor-details');
            if (vendorSelect && vendorDetailsElement) {
                vendorSelect.addEventListener('change', function() {
                    const selectedVendor = vendorSelect.value;
                    const vendorInfo = vendorData[selectedVendor];
                    if (vendorInfo) {
                        vendorDetailsElement.innerHTML = `
                    <h2>${selectedVendor}</h2>
                    <p><a href="${vendorInfo.link}" target="_blank">${vendorInfo.link}</a></p>
                    <p>Coupons: ${vendorInfo.coupons.length > 0 ? vendorInfo.coupons.join(', ') : 'No coupons available'}</p>
                `;
                    }
                });
            }

            // New Feature: Warning Message
            const warningMessageElement = document.getElementById('warning-message');
            if (warningMessageElement) {
                warningMessageElement.innerHTML = `
            <p><strong>Warning:</strong> Many vape and extract products on hemp vendor websites may have mislabeling or misleading descriptions. Always read product details and COAs carefully before purchasing. If unsure, contact the vendor directly.</p>
        `;
            }

            const vendorName = document.querySelector('.vendor-name');
            if (vendorName) {
                vendorName.classList.add('show');
            }

            // Example of dynamically changing text color
            const textElement = document.querySelector('.black-text');
            if (textElement) {
                textElement.style.color = 'black'; // Ensure the text color is set to black
            }
        });