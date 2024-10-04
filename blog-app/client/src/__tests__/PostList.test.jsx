//Import all testing dependencies needed
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

//Import component being tested
import PostList from '../components/PostList.jsx';

describe('List of Posts', () => {
    //Set up mock states using vi
    const mockSetComponent = vi.fn();
    const mockSetBlogPosts = vi.fn();
    const mockSetSelectedPost = vi.fn();
    
    //Create mock data to populate blog list
    const posts = [
      {
        title: 'Post 1',
        content: 'This is a great post!',
        created_at: '2023-10-01T12:00:00Z',
      },
      {
        title: 'Post 2',
        content: 'This post is okay.',
        created_at: '2023-10-02T12:00:00Z',
      },
      {
        title: 'Post 3',
        content: 'I didn\'t like this post.',
        created_at: '2023-10-03T12:00:00Z',
      },
    ];
  
    test('renders all blog posts with correct titles', () => {
      render(
        <PostList 
          setComponent={mockSetComponent} 
          blogPosts={posts} 
          setBlogPosts={mockSetBlogPosts} 
          setSelectedPost={mockSetSelectedPost} 
        />
      );
  
    //Iterate to through the posts and compare against titles being rendered
      posts.forEach(post => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
      });
  
    });

})