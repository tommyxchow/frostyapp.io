const ExternalLink = ({ text, href }: ExternalLinkProps) => {
  return (
    <a
      className='border-b-2 border-b-purple-500 border-opacity-0 font-medium text-purple-500 transition hover:border-opacity-100'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {text}
    </a>
  );
};

interface ExternalLinkProps {
  text: string;
  href: string;
}

export default ExternalLink;
