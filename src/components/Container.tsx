interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='m-auto px-[22px] max-w-[360px] md:px-[32px] md:max-w-[768px] xl:px-[84px] xl:max-w-[1280px] xxl:px-[275px] xxl:max-w-[1920px]'>
      {children}
    </div>
  );
};

export default Container;
