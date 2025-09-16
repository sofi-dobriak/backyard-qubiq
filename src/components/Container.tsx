interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='m-auto px-5 max-w-[360px] md:px-8 md:max-w-[768px] xl:px-21 xl:max-w-[1280px] xxl:px-[275px] xxl:max-w-[1920px]'>
      {children}
    </div>
  );
};

export default Container;
