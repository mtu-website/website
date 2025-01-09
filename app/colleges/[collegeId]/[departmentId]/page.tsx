import CoursesOffered from '@/components/departments/courses';
import Hero from '@/components/departments/hero';
import Objectives from '@/components/departments/objectives';
// import Staff from '@/components/departments/staff';
import Footer from '@/components/footer';
import Header from '@/components/header';

import { departments } from '@/lib/data';
import { generateSlug } from '@/lib/utils';

type Params = Promise<{ departmentId: string }>;

// 1. Generate static params for dynamic routes (Department IDs)
export async function generateStaticParams() {
  // Generate paths for each department
  return departments.map((department) => ({
    params: { departmentId: department.id },
  }));
}

// 2. Fetch department data based on params (collegeId and departmentId)
async function getDepartmentData(departmentId: string) {
  // Find department by departmentId
  const department = departments.find(
    (dept) => generateSlug(dept.name) === departmentId,
  );

  if (!department) {
    throw new Error(`Department not found`);
  }

  return department;
}

export default async function Department({ params }: { params: Params }) {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';

  const { departmentId } = await params;

  // Fetch department data dynamically
  const department = await getDepartmentData(departmentId);

  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero department={department} />
      <Objectives department={department} />
      <CoursesOffered department={department} />
      {/* <Staff department={department} /> */}
      <Footer />
    </main>
  );
}
