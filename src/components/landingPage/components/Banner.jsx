import Image from 'next/image';
import benkyBanner from '../../../assets/logos/banner_benky_2.png';
import { Box, Typography } from "@mui/material";

export default function Banner() {
  return (
    <section>
      <Box className="relative">
        <Image src={benkyBanner} alt='benky banner' className="w-full"/>
        <Box className="absolute w-full flex justify-center flex-col mt-24 md:mt-36" sx={{top:0,height:"calc(100% - 9rem)"}}>
        <Typography variant="h1" sx={{px:"4%"}} className="text-base sm:text-2xl lg:text-4xl font-bold md:w-full  lg:w-1/2">At Benky, we&apos;re not just another Fintech. We&apos;re passionate advocates for breaking down financial barriers and ensuring that transactions are easy, safe, and fast for everyone.</Typography>
        </Box>
      </Box>
     
    </section>
  );
}