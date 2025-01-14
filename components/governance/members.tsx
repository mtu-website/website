const members = [
  {
    id: '1',
    name: 'Prof. Elijah A. Ayolabi',
    position: 'Vice Chancellor',
    status: 'member',
  },
  {
    id: '2',
    name: 'Prof. Oladele J. Akinyomi',
    position: 'Deputy Vice Chancellor',
    status: 'member',
  },
  {
    id: '3',
    name: 'Prof. Godwin Ogbadu',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '5',
    name: 'Prof. Supo Jegede',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '6',
    name: 'Prof. Ezekiel Ayoola',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '7',
    name: 'Pastor Felix A. Peters',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '8',
    name: 'Pastor Lawrence Olaseinde',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '9',
    name: 'Mr. Olufemi E. Oyewole',
    position: 'Registrar and Secretary',
  },

  {
    id: '10',
    name: 'Mrs. M. R. Adeleke',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '11',
    name: 'Pastor Kenneth Odusanya',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '12',
    name: 'Hon. Victor Nwokolo',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '13',
    name: 'Mr. Rotimi Jacobs',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '14',
    name: 'Mr. Terry Eguagie Obaseki',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '15',
    name: 'Engr. Aderemi Oseni',
    position: 'Representative of Proprietor',
    status: 'member',
  },
  {
    id: '16',
    name: 'Prof. Babatunde O. Oni',
    position: 'Representative of Senate',
    status: 'member',
  },
  {
    id: '17',
    name: 'Prof. Ajayi',
    position: 'Representative of Senate',
    status: 'member',
  },
];

export default function Members() {
  return (
    <section className="px-6 py-12 lg:px-12 lg:py-24">
      {members.map((member) => (
        <div
          key={member.id}
          className="mx-auto mb-12 border-b-[2px] border-[#6F6F6F] xl:w-[1200px]"
        >
          <h3 className="font-sans text-[16px] font-bold capitalize leading-7 tracking-[-3%] text-[#84B000] lg:text-xl lg:leading-8">
            {member.name}
          </h3>
          <p className="font-sans text-sm font-normal capitalize leading-[22px] tracking-[-4%] text-[#6F6F6F] lg:text-[16px] lg:leading-[25.6px]">
            {member.position}
          </p>
          <p className="mb-9 font-sans text-sm font-bold capitalize leading-[22px] tracking-[-4%] text-[#6F6F6F] lg:text-[16px] lg:leading-[25.6px]">
            {member.status}
          </p>
        </div>
      ))}
    </section>
  );
}
