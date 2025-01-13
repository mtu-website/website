export type News = {
  id: number;
  newsId: string;
  departmentId: string;
  imageId: string;
  uniqueName: string;
  title: string;
  deckTitle: string;
  author: string;
  content: string;
  display: string;
  createdBy: string;
  created_at: string;
  updatedBy: string;
  updated_at: string;
  url: string;
};

export type RecentNewsProps = {
  news: News[];
};

export type Event = {
  map(
    arg0: (event: Event) => {
      uniqueName: string;
      title: string;
      content: string;
      startTime: string;
      endTime: string;
      startDate: string;
      endDate: string;
      location: string;
      isUpcoming: boolean;
      id: number;
      eventId: string;
      imageId: string;
      departmentId: string;
      eventName: string;
      theme: string;
      postedBy: string;
      contact: string;
      display: string;
      createdBy: string;
      updatedBy: string;
      created_at: string;
      updated_at: string;
      url: string;
    },
  ): Event[];
  id: number;
  title: string;
  endMonth: string;
  startMonth: string;
  year: string;
  venue: string;
  eventId: string;
  uniqueName: string;
  imageId: string;
  departmentId: string;
  eventName: string;
  theme: string;
  postedBy: string;
  content: string;
  startDate: string;
  endDate: string;
  startTime: string;
  contact: string;
  location: string;
  endTime: string;
  display: string;
  createdBy: string;
  updatedBy: string;
  created_at: string;
  updated_at: string;
  isUpcoming: boolean;
  url: string;
};

export type UpcomingEvent = {
  event: Event[];
};

export type PastEvent = {
  event: Event[];
};

export type MoreEvent = {
  event: Event[];
};

export type College = {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  heroText?: string;
  numberOfStudents?: string;
  numberOfDepartment?: string;
  numberOfStaff?: string;
  introductionHeader?: string;
  introductionText?: string;
  departmentHeader?: string;
  departmentText?: string;
  departments?: Department[];
  principalOfficers?: PrincipalOfficer[];
  journal?: Journal;
};

export type Department = {
  objectives?: string;
  id: string;
  name: string;
  programs?: Program[];
};

export type Program = {
  id: string;
  name: string;
  honours: string;
  heroImageUrl: string;
  duration: string;
  semester: string;
  timeFrame: string;
  field: string;
  program: string;
  modes: Mode[];
};

export type Mode = {
  id: string;
  name: string;
  duration: string;
  timeFrame: string;
};

export type PrincipalOfficer = {
  id: string;
  name: string;
  role: string;
};

export type Journal = {
  title: string;
  description: string;
  imageUrl: string;
};
