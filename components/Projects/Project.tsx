import { IProject, IProjectLink } from '@/projectData';
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa/';
import { FiExternalLink } from 'react-icons/fi/';
import styled from 'styled-components';

const getLinkIcon = (type: IProjectLink['type']) => {
  switch (type) {
    case 'github':
      return <FaGithub />;
    default:
      return <FiExternalLink />;
  }
};
const ExtLink = ({ url, type }: { url: string; type: 'github' | 'other' }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {getLinkIcon(type)}
    </a>
  );
};
const Project = ({ image, description, title, links, imageAlt }: IProject) => {
  return (
    <ProjectContainer>
      <ImageWrapper>
        <Image src={image} alt={imageAlt} layout="responsive" width={700} height={475} />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Links>
          {links.map((link) => (
            <ExtLink key={link.url} url={link.url} type={link.type} />
          ))}
        </Links>
      </Content>
    </ProjectContainer>
  );
};
const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid var(--clr-gray5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow-light);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: var(--box-shadow-light-hover);
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: var(--box-shadow-dark);
    &:hover {
      box-shadow: var(--box-shadow-dark-hover);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin: 0 0 20px;
  font-size: 1em;
  color: #666;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
`;
export default Project;
