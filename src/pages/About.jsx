import { Box, Typography, Container, Stack } from '@mui/material';
import aboutImg from '../assets/aboutImg.png'; 
import ResponsiveAppBar from '../components/Navbar'

function About() {
    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="md" sx={{ mt: 5 }}>

                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', color: '#1F2937', textAlign: 'center' }}
                >
                    About TasteCraft
                </Typography>

                <Box
                    component="img"
                    src={aboutImg}
                    alt="About TasteCraft"
                    sx={{
                        width: '100%',
                        maxHeight: 300,
                        objectFit: 'cover',
                        borderRadius: 3,
                        mt: 3
                    }}
                />


                <Stack spacing={2} mt={4}>
                    <Typography sx={{ color: '#4B5563', lineHeight: 1.7 }}>
                        TasteCraft is a modern recipe web application designed to help users discover, explore,
                        and enjoy a wide variety of delicious recipes from around the world. The platform provides
                        a seamless and intuitive user experience, allowing users to browse recipes, view detailed
                        instructions, and save their favorite dishes for quick access.
                    </Typography>

                    <Typography sx={{ color: '#4B5563', lineHeight: 1.7 }}>
                        This application focuses on simplicity, performance, and usability. Users can easily search
                        for recipes, filter based on their preferences, and manage their favorite recipes efficiently.
                        The clean user interface ensures a pleasant browsing experience across different devices.
                    </Typography>

                    <Typography sx={{ color: '#4B5563', lineHeight: 1.7 }}>
                        From a development perspective, TasteCraft demonstrates strong frontend engineering practices,
                        including component-based architecture, state management, responsive design, and data persistence
                        using localStorage. The project reflects a practical approach to building scalable and user-friendly
                        web applications.
                    </Typography>
                </Stack>

                <Box mt={4}>
                    <Typography sx={{ fontWeight: 'bold', color: '#2563EB', fontSize: 18 }}>
                        Key Features:
                    </Typography>

                    <ul style={{ color: '#4B5563', lineHeight: 1.8 }}>
                        <li>Search and explore a wide range of recipes</li>
                        <li>Mark and manage favorite recipes</li>
                        <li>Responsive and user-friendly interface</li>
                        <li>Persistent data using localStorage</li>
                        <li>Clean and modern UI design</li>
                    </ul>
                </Box>

            </Container>
        </>
    );
}

export default About;