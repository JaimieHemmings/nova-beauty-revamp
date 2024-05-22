'use server';
import HomePage from '@/models/Pages';
import ConnectDB from '@/config/database'
import { revalidatePath } from 'next/cache'

async function updateHomepage(homepageId, formData) {
  await ConnectDB();

  const newHomePage = new HomePage({
    BannerTitle: formData.get('BannerTitle'),
    BannerMessage: formData.get('BannerMessage'),
    IntroTitleStart: formData.get('IntroTitleStart'),
    IntroTitleHighlight: formData.get('IntroTitleHighlight'),
    IntroTitleEnd: formData.get('IntroTitleEnd'),
    IntroMessage: formData.get('IntroMessage'),
    MainBodyTitleStart: formData.get('MainBodyTitleStart'),
    MainBodyTitleHighlight: formData.get('MainBodyTitleHighlight'),
    MainBodyTitleEnd: formData.get('MainBodyTitleEnd'),
    MainBodyMessage: formData.get('MainBodyMessage'),
  });


  const updatedHomePage = await HomePage.findByIdAndUpdate(
    homepageId,
    newHomePage
  );

  // revalidate cache
  revalidatePath('/', 'layout');

  redirect('/');
}

export default updateHomepage