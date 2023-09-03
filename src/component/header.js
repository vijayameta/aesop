
import React from 'react';
import { Toolbar, Typography, Box, Button, Container, Link, Checkbox } from '@mui/material';

const pages = [
    'Skin Care',
    'Body & Hand',
    'Hair',
    'Fragrance',
    'Home',
    'Kits & Travel',
    'Gifts',
    'Read',
    'Stores',
    'Facial Appointments'
];


const pages2 = ['Log in', 'Cabinet', 'Cart'];

export default function AesopWebsite() {
    return (
        <>
            <Box position="static" maxWidth='xl' sx={{ backgroundColor: '#FFFEF2' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" color={'black'}>
                        Aesop
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button sx={{ width: 'max-content', textTransform: 'capitalize', color: 'black' }}>{page}</Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 15 }}>
                        {pages2.map((page) => (
                            <Button sx={{ width: 'max-content', textTransform: 'capitalize', color: 'black' }}>{page}</Button>
                        ))}
                    </Box>
                </Toolbar>
                <Container
                    component="div" // Use 'div' instead of 'img' as the component
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '97.5vw',
                        height: '100vh', // Set the container to cover the entire viewport height
                        backgroundImage: `url(https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                >
                    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Button sx={{ mb: 52, mr: 5, color: 'white', textTransform: 'capitalize', fontSize: 30 }}>Aesop</Button>
                        </Box>
                        <Box>
                            <Box sx={{ width: '30vw', mb: 20, mr: 80 }}>
                                <Typography sx={{ color: 'white', }}>Bar Soaps</Typography>
                                <Typography variant='h4' sx={{ color: 'white', mt: 2 }}>A body care classic, reimagined </Typography>
                                <Typography sx={{ color: 'white', textAlign: 'inherit', mt: 3 }}>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits. </Typography>
                                <Button
                                    variant='text'
                                    sx={{
                                        color: 'white',
                                        textTransform: 'capitalize',
                                        mt: 5,
                                        border: '1px solid white',
                                        '&:hover': {
                                            color: 'black',
                                            background: 'white',
                                            border: '1px solid white', // You can adjust the border style as needed
                                        },
                                    }}
                                >
                                    Discover Bar Soaps
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Container>
                <Container sx={{ mt: 15 }}>
                    <Typography variant='h6' style={{ fontSize: 15, fontWeight: 5 }}>For the body</Typography>
                    <Typography variant='h4' style={{ fontSize: 25, fontWeight: 19 }}>An expression of care</Typography>
                    <Typography sx={{ textAlign: 'inherit', width: '29vw', mt: 3 }}>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</Typography>
                    <Button
                        variant='text'
                        sx={{
                            color: 'black',
                            textTransform: 'capitalize',
                            mt: 5,
                            border: '1px solid black',
                            '&:hover': {
                                color: 'white',
                                background: 'black',
                                border: '1px solid white', // You can adjust the border style as needed
                            },
                        }}
                    >See all Body Care </Button>
                </Container>
                <Container sx={{ display: 'flex', maxWidth: 'min-content' }}>
                    <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 10 }} >
                        <img src='https://www.aesop.com/u1nb1km7t5q7/XBqwXIoTkZRfNBQKshfrQ/884461d1edf5a49fdc20951a5aaf33d9/Aesop_Body_Nurture_Bar_Soap_150g_Web_Texture_Small_700x425px.png' alt='Aeosoap' style={{ width: 400 }} />
                        Link to Nurture Bar Soap
                    </Link>
                    <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 10 }}>
                        <img src='https://www.aesop.com/u1nb1km7t5q7/2ogDGte4rVgC1zpARoHkH5/64dd3bdc52a97c97c6bda8e09c9fa729/Aesop_Body_Polish_Bar_Soap_150g_Web_Texture_Large_1800X1093px.png' alt='Aeosoap' style={{ width: 400 }} />
                        Polish Bar Soap
                    </Link>
                    <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 10 }}>
                        <img src='https://www.aesop.com/u1nb1km7t5q7/1YhnRsLyn3w2rVuOfYN7ad/4023e3a9b25af7fa06f1b154b86cf538/Aesop_Body_Refresh_Bar_Soap_150g_Web_Texture_Large_1800X1093px.png' alt='Aeosoap' style={{ width: 400 }} />
                        Refresh Bar Soap
                    </Link>
                </Container>
                <Container sx={{ display: 'flex', mt: 18 }}>
                    <Box>
                        <Typography>The Athenaeum</Typography>
                        <Typography variant='h4' sx={{ mt: 2 }}>The warm-up</Typography>
                        <Typography sx={{ width: '60vh', mt: 3 }}>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</Typography>
                        <Button
                            variant='text'
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                mt: 5,
                                border: '1px solid black',
                                '&:hover': {
                                    color: 'white',
                                    background: 'black',
                                    border: '1px solid white', // You can adjust the border style as needed
                                },
                            }}
                        >
                            Read more
                        </Button>
                    </Box>
                    <Box
                        component="div" // Use 'div' instead of 'img' as the component
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '150vw',
                            height: '60vh',
                            ml: 10,
                            left: 10,
                            // Set the container to cover the entire viewport height
                            backgroundImage: `url(https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    ></Box>
                </Container>
                <Container sx={{ display: 'flex', mt: 18 }}>
                    <Box>
                        <Typography>For the skin</Typography>
                        <Typography variant='h4' sx={{ mt: 2 }}>Attention for all types</Typography>
                        <Typography sx={{ width: '60vh', mt: 3 }}>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.
                        </Typography>
                        <Button
                            variant='text'
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                mt: 5,
                                border: '1px solid black',
                                '&:hover': {
                                    color: 'white',
                                    background: 'black',
                                    border: '1px solid white', // You can adjust the border style as needed
                                },
                            }}
                        >
                            See all Skin Care
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 18 }} >
                            <img src='https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png' alt='Aeosoap' style={{ width: 430 }} />
                            Link to Nurture Bar Soap
                        </Link>
                        <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 10 }}>
                            <img src='https://www.aesop.com/u1nb1km7t5q7/4DGsDcDdfO5dcxxkckH0Vz/ff15e75ea0734ffa3273513bda5a40d2/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png' alt='Aeosoap' style={{ width: 357 }} />
                            Polish Bar Soap
                        </Link>
                    </Box>
                </Container>

                <Container sx={{ display: 'flex' }}>
                    <Box
                        component="div" // Use 'div' instead of 'img' as the component
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '150vw',
                            height: '60vh',
                            // Set the container to cover the entire viewport height
                            backgroundImage: `url(https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    >
                    </Box>
                    <Box sx={{ ml: 15 }}>
                        <Typography variant='h5' sx={{ mt: 2 }}>Post-Poo Drops has returned</Typography>
                        <Typography sx={{ width: '55vh', mt: 3 }}>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</Typography>
                        <Button
                            variant='text'
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                mt: 5,
                                border: '1px solid black',
                                '&:hover': {
                                    color: 'white',
                                    background: 'black',
                                    border: '1px solid white', // You can adjust the border style as needed
                                },
                            }}
                        >
                            Discover Post-Poo Drops
                        </Button>
                    </Box>
                </Container>
                <Container sx={{ display: 'flex', mt: 18 }}>
                    <Box>
                        <Typography>For the home</Typography>
                        <Typography variant='h4' sx={{ mt: 2 }}>Domestic pleasures</Typography>
                        <Typography sx={{ width: '60vh', mt: 3 }}>Our range of aromatic formulations for the home are practical and pleasing in equal measure.
                        </Typography>
                        <Button
                            variant='text'
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                mt: 5,
                                border: '1px solid black',
                                '&:hover': {
                                    color: 'white',
                                    background: 'black',
                                    border: '1px solid white', // You can adjust the border style as needed
                                },
                            }}
                        >
                            See all Home
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none', mb: 7 }} >
                            <img src='https://www.aesop.com/u1nb1km7t5q7/WnUICDuVJPP7cJqhUM660/59834fc21eca3e5e68ea8697f83b5082/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png' alt='Aeosoap' style={{ width: 400 }} />
                            Link to Nurture Bar Soap
                        </Link>
                        <Link href="https://example.com/nurture-bar-soap" target="_blank" rel="noopener" sx={{ textAlign: 'center', color: 'black', textDecoration: 'none' }}>
                            <img src='https://www.aesop.com/u1nb1km7t5q7/7Ix7IeS83oTfoM8BlMmaJw/1efca65b0dfa372e628004665a5b55e5/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png' alt='Aeosoap' style={{ width: 400 }} />
                            Polish Bar Soap
                        </Link>
                    </Box>
                </Container>
                <Container sx={{ display: 'flex', mt: 15 }}>
                    <Box>
                        <Typography variant='h4' sx={{ mt: 2 }}>Store locator</Typography>
                        <Typography sx={{ width: '60vh', mt: 3 }}>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </Typography>
                        <Button
                            variant='text'
                            sx={{
                                color: 'black',
                                textTransform: 'capitalize',
                                mt: 5,
                                border: '1px solid black',
                                '&:hover': {
                                    color: 'white',
                                    background: 'black',
                                    border: '1px solid white', // You can adjust the border style as needed
                                },
                            }}
                        >
                            Find a nearby store
                        </Button>
                    </Box>
                    <Box
                        component="div" // Use 'div' instead of 'img' as the component
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '150vw',
                            height: '60vh',
                            ml: 10,
                            left: 10,
                            // Set the container to cover the entire viewport height
                            backgroundImage: `url(https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    ></Box>
                </Container>
                <Box sx={{ ml: 67, mt: 8 }}>
                    <Typography>Aesop Fashion Walk</Typography>
                </Box>

                <Box sx={{ mt: 25, width: '70vw' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: 30, ml: 45 }}>‘Life never becomes a habit to me. It's always a marvel.’</Typography>
                    <Typography sx={{ textAlign: 'center', ml: 40, mt: 3 }}>Katherine Mansfield</Typography>
                </Box>
            </Box >
            <Container sx={{ backgroundColor: 'black', display: 'flex', height: '130vh' }}>
                <Box>
                    <Box sx={{ ml: 1.5 }}>
                        <Typography sx={{ color: 'white', mb: 2, pt: 3, }}>Subscribe to Aesop communications</Typography>
                        <Box sx={{ width: 535, height: '1px', backgroundColor: 'white', mb: 2, }}></Box>
                        <input type='text' placeholder='Email' style={{ backgroundColor: 'black', color: 'white', padding: 10, width: 510, borderColor: 'white' }} />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Checkbox sx={{ color: 'white', }} />
                        <Typography sx={{ color: 'white', width: 550, mt: 3 }}>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood</Typography>
                    </Box>
                    <Box sx={{ ml: 2, color: 'white', width: 535, }}>
                        <Typography sx={{ mt: 20, }}>Sustainability</Typography>
                        <Box sx={{ height: '1px', backgroundColor: 'white', mt: 2, }}></Box>
                        <Typography sx={{ pt: 2 }}>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</Typography>
                    </Box>
                </Box>
                <Box sx={{ color: 'white', mt: 3 }}>
                    <Typography>Others and Support</Typography>
                    <Box sx={{ width: 200, height: '1px', backgroundColor: 'white', mb: 2, mt: 2 }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Contact us</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>FAQs</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Shipping</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Returns</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Order history</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Contact us</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Terms and conditions</Button>
                    </Box>
                    <Box sx={{ color: 'white', mt: 3 }}>
                        <Typography>About</Typography>
                        <Box sx={{ width: 200, height: '1px', backgroundColor: 'white', mb: 2, mt: 2 }}></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Our story</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Foundation</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Careers</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Privacy policy</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Accessibility</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Cookie Policy</Button>
                        </Box>
                    </Box>
                    <Box sx={{ color: 'white', mt: 7, fontSize: '25px' }}>© Aesop</Box>
                </Box>
                <Box sx={{ color: 'white', mt: 3, ml: 5, width: 'auto' }}>
                    <Typography>Services</Typography>
                    <Box sx={{ width: 200, height: '1px', backgroundColor: 'white', mb: 2, mt: 2 }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Live assistance</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Corporate gifts</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Shipping</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Facial Appointments</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Click and Collect</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Video consultation</Button>
                    </Box>
                    <Box sx={{ color: 'white', mt: 3 }}>
                        <Typography>Social media</Typography>
                        <Box sx={{ width: 200, height: '1px', backgroundColor: 'white', mb: 2, mt: 6.5 }}></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Instagram </Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Twitter </Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>LinkedIn </Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>WeChat</Button>
                            <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Weibo </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ color: 'white', mt: 3, ml: 5 }}>
                    <Typography>Location preferences</Typography>
                    <Box sx={{ width: 200, height: '1px', backgroundColor: 'white', mb: 2, mt: 2 }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ color: 'white' }}>Shipping:</Typography>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Hong Kong SAR, China</Button>
                        <Typography sx={{ color: 'white' }}>Shipping:</Typography>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>Language:</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>English</Button>
                        <Button sx={{ color: 'white', textTransform: 'capitalize' }}>繁體中文</Button>
                    </Box>
                </Box>
            </Container >
        </>
    );
}



