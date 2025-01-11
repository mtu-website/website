import DepartmentList from '@/components/college/department-list';
// import Events from '@/components/college/events';
import Hero from '@/components/college/hero';
// import Intro from '@/components/college/intro';
import JournalSection from '@/components/college/journal';
import PrincipalOfficers from '@/components/college/principal-officers';
import Footer from '@/components/footer';
import Header from '@/components/header';

import { colleges } from '@/lib/data';
import { generateSlug } from '@/lib/utils';

type Params = Promise<{ collegeId: string }>;

export async function generateStaticParams() {
  // Ensure `colleges` is an array
  if (!Array.isArray(colleges)) {
    throw new Error('Colleges is not an array or is undefined.');
  }

  return colleges.map((college) => ({
    params: { collegeId: college.name },
  }));
}

async function getCollegeData(collegeId: string) {
  const college = colleges.find(
    (college) => generateSlug(college.name) === collegeId,
  );
  console.log('college', college);

  if (!college) {
    throw new Error(`College not found`);
  }
  return college;
}

export default async function College({ params }: { params: Params }) {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';

  const { collegeId } = await params;
  const college = await getCollegeData(collegeId);
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero college={college} />
      {/* <Intro /> */}
      <DepartmentList college={college} />
      <PrincipalOfficers />
      <JournalSection college={college} />
      {/* <Events /> */}
      <Footer />
    </main>
  );
}
