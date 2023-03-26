import React, { useState } from "react";
import { Card, CardContent, CardActions, Stack, Typography, Button, Rating, useTheme, Collapse } from '@mui/material'
import { Product } from "@/interfaces/global";


type Props = {
    item: Product
};

const ProductItem = ({ item }: Props) => {
    const [expandMore, setExpandMore] = useState(false)
    const toggleExpandMore = () => {
        setExpandMore(!expandMore)
    }

    const theme = useTheme()
    return <Card sx={{ bgcolor: theme.palette.background.alt, backgroundImage: 'unset', height: '100%' }}>
        <Stack height={'100%'}>
            <CardContent>
                <Stack mb={2} spacing={0.5}>
                    <Typography textTransform={'capitalize'}>
                        {item.category}
                    </Typography>
                    <Typography variant={'h4'} textTransform={'capitalize'}>
                        {item.name}
                    </Typography>
                    <Typography color={theme.palette.secondary[300]} fontWeight={'semibold'}>
                        ${item.price}
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <Rating value={Math.round(item.rating)} readOnly />
                    <Typography>{item.description}</Typography>
                </Stack>
            </CardContent>
            <Stack mt='auto'>
                <CardActions>
                    <Button variant="text" color={'inherit'} size='large' onClick={toggleExpandMore}>
                        See more
                    </Button>
                </CardActions>
                <Collapse in={expandMore} timeout="auto" unmountOnExit>
                    <CardContent sx={{ color: theme.palette.primary[300] }}>
                        <Typography textTransform={'capitalize'}>
                            Supply left: {item.supply}
                        </Typography>
                        <Typography>
                            Year sales total: {item.productStats.yearlySalesTotal}
                        </Typography>
                        <Typography>
                            Year total sold units: {item.productStats.yearlyTotalSoldUnits}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Stack>
        </Stack>
    </Card>;
};

export default ProductItem;
