// write tests as we go
import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import { MarsRoverPhotoViewer } from "./MarsRoverPhotoViewer";

// checks the api call
// checks json data is mapped correctly - use a mock function?
// checks photos display on screen - also use mock functiion?

// describe('displays photos', () => {
//     const {getByAltText} = render(<MarsRoverPhotoViewer />)
//     const HTMLElement = getByAltText(/Curiosity, FHAZ_LEFT_B, 1297926/i);
//     expect(HTMLElement).toMatch("https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04456/opgs/edr/fcam/FLB_793081865EDR_F1131440FHAZ00302M_.JPG")

//     })

// test('it displays the image with the correct src and alt attributes', () => {
//     const { getByAltText } = render(<ImageComponent src="test-image.jpg" alt="Test Image" />);
  
//     const imgElement = getByAltText('Test Image');
//     expect(imgElement).toBeInTheDocument();
//     expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
//   });

//   describe('UserList', () => {
//     beforeEach(() => {
//         global.fetch = jest.fn().mockResolvedValue({
//             json: jest.fn().mockResolvedValue(
//                 {
//                     next: null,
//                     previous: null,
//                     results: [{
//                         id: 58,
//                         name: "Anatollo Assinder",
//                         username: "aassinder11",
//                         email: "aasinder11@blinklist.com",
//                         coverImageUrl: "https://picsum.photos/id/302/2100/800",
//                         profileImageUrl: "https://robohash.org/aassinder1l.png?bgset=bg1",
//                         likes: [],
//                         dislikes: [],
//                         posts: []
//                     }, {
//                         id: 21,
//                         name: "Audrie Laslett",
//                         username: "alaslettk",
//                         email: "alaslettk@cpanel.net",
//                         coverImageUrl: "https://picsum.photos/id/222/2100/800",
//                         profileImageUrl: "https://robohash.org/alaslettk.png?bgset=bg1",
//                         likes: [],
//                         dislikes: [],
//                         posts: []
//                     }],
//                     total: 2
//                 }
//             ),
//             status: 200,
//             ok: true
//         })
//     })

//     test('should render', async() => {
//         await act( async () => render(<MemoryRouter><UserList/></MemoryRouter>));
//         const linkElement = screen.getByText(/Anatollo Assinder/i);
//         expect(linkElement).toBeInTheDocument();
//         expect(linkElement).toHaveAttribute('href', '/userdetails/58'); 
//     });
// })
