export const fetchUserSongs = (id) => (
  $.ajax({
    url: `/api/users/${id}/songs`
  })
);

export const fetchSong = (id) => (
  $.ajax({
    url: `/api/songs/${id}`
  })
);

export const deleteSong = (id) => (
  $.ajax({
    url: `/api/songs/${id}`,
    method: 'DELETE'
  })
);

export const createSong = (song) => (
  $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: song,
    processData: false,
    contentType: false,
    dataType: 'json'
  })
);