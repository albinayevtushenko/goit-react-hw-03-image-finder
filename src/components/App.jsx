import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import SearchBar from './Searchbar/Searchbar';
// import { searchQueryApi } from './ServiceApi/ServiceApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  searchFormSubmit = searchQuery => {
    this.setState({ query: searchQuery, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { query, page } = this.state;
    return (
      <Layout>
        <SearchBar onSubmit={this.searchFormSubmit} />
        <ImageGallery
          value={query}
          page={page}
          loadMore={this.handleLoadMore}
        />
        <GlobalStyle />
        <Toaster position="top-center" reverseOrder={false} gutter={8} />
      </Layout>
    );
  }
}
