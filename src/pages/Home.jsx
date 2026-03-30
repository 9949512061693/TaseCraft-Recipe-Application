import { Stack, Typography, TextField, Box, Button } from '@mui/material'
import ResponsiveAppBar from '../components/Navbar'
import RecipeReviewCard from '../components/RecipeCard'
import { useEffect, useState } from 'react'

function Home() {
    const [recipesData, setRecipesData] = useState([]);
    const [search, setSearch] = useState('');
    const [showFavoritesFirst, setShowFavoritesFirst] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem('recipesData');

        if (storedData) {
            setRecipesData(JSON.parse(storedData));
        } else {
            (async () => {
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();

                const updateRecipes = data.recipes.map((eachRecipe) => ({
                    ...eachRecipe,
                    description: `${eachRecipe.name} is a delightful ${eachRecipe.cuisine} 
                    ${eachRecipe.difficulty.toLowerCase()} dish crafted with carefully selected ingredients.
                    Perfect for ${eachRecipe.mealType.join(", ").toLowerCase()}, this recipe offers a rich and satisfying flavor experience. 
                    Ready in just ${eachRecipe.prepTimeMinutes + eachRecipe.cookTimeMinutes} minutes, it serves ${eachRecipe.servings} people and has earned 
                    a rating of ${eachRecipe.rating}⭐ from ${eachRecipe.reviewCount} food lovers.`,
                    isFavorite: false
                }));

                setRecipesData(updateRecipes);
                localStorage.setItem('recipesData', JSON.stringify(updateRecipes));
            })();
        }
    }, []);

    const updateFavoriteStatus = (id) => {
        const updatedRecipes = recipesData.map((recipe) => {
            if (recipe.id === id) {
                return { ...recipe, isFavorite: !recipe.isFavorite };
            }
            return recipe;
        });

        setRecipesData(updatedRecipes);
        localStorage.setItem('recipesData', JSON.stringify(updatedRecipes));
    };

    let filteredRecipes = recipesData.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    );

    if (showFavoritesFirst) {
        filteredRecipes = [...filteredRecipes].sort(
            (a, b) => b.isFavorite - a.isFavorite
        );
    }

    return (
        <>
            <ResponsiveAppBar />

            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', color: '#1F2937' }}
                >
                    Discover Delicious Recipes 🍽️
                </Typography>

                <Typography sx={{ color: '#6B7280', mt: 1 }}>
                    Find, explore, and cook your favorite meals with TasteCraft
                </Typography>

                <TextField
                    placeholder="Search recipes..."
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        mt: 3,
                        width: { xs: '90%', sm: '400px' },
                        backgroundColor: '#fff',
                        borderRadius: '8px'
                    }}
                />

                <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                    <Button
                        variant={!showFavoritesFirst ? "contained" : "outlined"}
                        onClick={() => setShowFavoritesFirst(false)}
                        sx={{ textTransform: 'none', borderRadius: '20px' }}
                    >
                        All Recipes
                    </Button>

                    <Button
                        variant={showFavoritesFirst ? "contained" : "outlined"}
                        onClick={() => setShowFavoritesFirst(true)}
                        sx={{ textTransform: 'none', borderRadius: '20px' }}
                    >
                        Favorites ⭐
                    </Button>
                </Stack>
            </Box>

            <Stack
                padding={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center'
                }}
            >
                {filteredRecipes.map((recipe) => (
                    <RecipeReviewCard
                        key={recipe.id}
                        product={recipe}
                        updateFavoriteStatus={updateFavoriteStatus}
                    />
                ))}
            </Stack>
        </>
    );
}

export default Home;