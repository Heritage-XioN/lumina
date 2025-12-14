'use client';
import { Rating, RatingButton } from '@/components/kibo-ui/rating';

const RatingComponent = () => {
    return (
        <Rating defaultValue={3}>
            {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton className='text-yellow-500' key={index}  />
            ))}
        </Rating>
    );
};

export default RatingComponent;