import { fireEvent, render, screen } from "@testing-library/react";
import SearchSection from "../SearchSection";
import { SEARCH_API } from "../../hooks/useSearch";
import { mockResponseSearch } from "./__mocks__/response";

const mockGetSearch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const mockModule = jest.requireActual('react-router-dom');
  return {
    ...mockModule,
    useNavigate: () => mockNavigate
  }
})

jest.mock('axios', () => {
  const mockModule = jest.requireActual('axios');
  return {
    ...mockModule,
    get: async (url: string) => {
      switch(url) {
        case SEARCH_API:
          // eslint-disable-next-line no-case-declarations
          const result = mockGetSearch.mockResolvedValue({
            data: {
              meals: mockResponseSearch
            }
          });
          return await result(); 
        default:
          return jest.fn();
      }
    }
  }
})

describe('Testing component SearchSection', () => {
  it('Should render correctly', async () => {
    const labelSearch = 'Search of recipes';
    render(<SearchSection />);

    // check title is exists
    expect(screen.getByText('Search Recipe')).toBeInTheDocument();

    fireEvent.focusIn(screen.getByLabelText(labelSearch))
    fireEvent.change(screen.getByLabelText(labelSearch), {
      target: {
        value: 'Be',
      }
    });

    expect(await screen.findByText(mockResponseSearch[0].strMeal));
  })
})