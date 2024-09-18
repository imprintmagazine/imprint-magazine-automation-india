document.addEventListener('DOMContentLoaded', () => {
  // Define the data
  const issues = [
    {
      year: 1961,
      issues: [
        {
          month: 'July',
          jpg: 'July_1961.jpeg'
        }
      ]
    },
    {
      year: 1962,
      issues: [
        {
          month: 'September',
          pdf: 'September_1962.mp4',
          jpg: 'September_1962.jpg'
        }
      ]
    },
    {
      year: 1969,
      issues: [
        {
          month: 'November',
          pdf: 'November_1969.mp4',
          jpg: 'November_1969.jpg'
        }
      ]
    },
    {
      year: 1983,
      issues: [
        {
          month: 'December',
          pdf: 'Imprint-Issue-December-1983.pdf',
          jpg: 'Imprint-Issue-December-1983.jpg'
        },
        {
          month: 'Novemebr',
          pdf: 'Imprint-Issue-Novemebr-1983.pdf',
          jpg: 'Imprint-Issue-Novemebr-1983.jpg'
        },
        {
          month: 'Octomber',
          pdf: 'Imprint-Issue-Octomber-1983.pdf',
          jpg: 'Imprint-Issue-Octomber-1983.jpg'
        },
        {
          month: 'September',
          pdf: 'Imprint-Issue-September-1983.pdf',
          jpg: 'Imprint-Issue-September-1983.jpg'
        },
        {
          month: 'August',
          pdf: 'Imprint-Issue-August-1983.pdf',
          jpg: 'Imprint-Issue-August-1983.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint-Issue-July-1983.pdf',
          jpg: 'Imprint-Issue-July-1983.jpg'
        },
        {
          month: 'June',
          pdf: 'Imprint-Issue-June-1983.pdf',
          jpg: 'Imprint-Issue-June-1983.jpg'
        },
        {
          month: 'May',
          pdf: 'Imprint-Issue-May-1983.pdf',
          jpg: 'Imprint-Issue-May-1983.jpg'
        }
      ]
    },

    {
      year: 1984,
      issues: [
        {
          month: 'March',
          pdf: 'Imprint issue March 1984.pdf',
          jpg: 'Imprint issue March 1984.jpg'
        },
        {
          month: 'February',
          pdf: 'Imprint issue February 1984.pdf',
          jpg: 'Imprint issue February 1984.jpg'
        },
        {
          month: 'January ',
          pdf: 'Imprint issue January 1984.pdf',
          jpg: 'Imprint issue January 1984.jpg'
        }
      ]
    },
    {
      year: 1985,
      issues: [
        {
          month: 'December',
          pdf: 'Imprint issue December 1985.pdf',
          jpg: 'Imprint issue December 1985.jpg'
        },
        {
          month: 'November',
          pdf: 'Imprint Special Diwali Issue -November 1985.pdf',
          jpg: 'Imprint Special Diwali Issue -November 1985.jpg'
        },
        {
          month: 'October',
          pdf: 'Imprint issue October 1985.pdf',
          jpg: 'Imprint issue October 1985.jpg'
        },
        {
          month: 'September',
          pdf: 'Imprint issue September 1985.pdf',
          jpg: 'Imprint issue September 1985.jpg'
        },
        {
          month: 'August',
          pdf: 'Imprint issue August 1985.pdf',
          jpg: 'Imprint issue August 1985.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint issue July 1985.pdf',
          jpg: 'Imprint issue July 1985.jpg'
        },
        {
          month: 'June',
          pdf: 'Imprint issue June 1985.pdf',
          jpg: 'Imprint issue June 1985.jpg'
        },
        {
          month: 'May',
          pdf: 'Imprint issue May 1985.pdf',
          jpg: 'Imprint issue May 1985.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint issue April 1985.pdf',
          jpg: 'Imprint issue April 1985.jpg'
        },
      ]
    },
    {
      year: 1986,
      issues: [
        {
          month: 'March',
          pdf: 'Imprint issue March 1986.pdf',
          jpg: 'Imprint issue March 1986.jpg'
        },
        {
          month: 'February',
          pdf: 'Imprint issue February 1986.pdf',
          jpg: 'Imprint issue February 1986.jpg'
        },
        {
          month: 'January ',
          pdf: 'Imprint issue January 1986.pdf',
          jpg: 'Imprint issue January 1986.jpg'
        }
      ]
    },
    {
      year: 1987,
      issues: [
        {
          month: 'November',
          pdf: 'Imprint Issue November 1987.pdf',
          jpg: 'Imprint Issue November 1987.jpg'
        },
        {
          month: 'Octomber',
          pdf: 'Imprint Issue Octomber 1987.pdf',
          jpg: 'Imprint Issue Octomber 1987.jpg'
        },
        {
          month: 'September',
          pdf: 'Imprint Issue September 1987.pdf',
          jpg: 'Imprint Issue September 1987.jpg'
        },
        {
          month: 'August',
          pdf: 'Imprint Issue August 1987.pdf',
          jpg: 'Imprint Issue August 1987.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint Issue july 1987.pdf',
          jpg: 'Imprint Issue july 1987.jpg'
        },
        {
          month: 'June',
          pdf: 'Imprint Issue june 1987.pdf',
          jpg: 'Imprint Issue june 1987.jpg'
        },
        {
          month: 'May',
          pdf: 'Imprint Issue May 1987.pdf',
          jpg: 'Imprint Issue May 1987.jpg'
        },
        {
          month: 'April',
          pdf: 'Imprint Issue April 1987.pdf',
          jpg: 'Imprint Issue April 1987.jpg'
        }
      ]
    },
    {
      year: 1988,
      issues: [
        {
          month: 'September',
          pdf: 'Imprint Issue September 1988.pdf',
          jpg: 'Imprint Issue September 1988.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint Issue July 1988.pdf',
          jpg: 'Imprint Issue July 1988.jpg'
        },
        {
          month: 'June',
          pdf: 'Imprint Issue June 1988.pdf',
          jpg: 'Imprint Issue June 1988.jpg'
        },
        {
          month: 'May',
          pdf: 'Imprint Issue May 1988.pdf',
          jpg: 'Imprint Issue May 1988.jpg'
        },
        {
          month: 'March',
          pdf: 'Imprint Issue March 1988.pdf',
          jpg: 'Imprint Issue March 1988.jpg'
        },
        {
          month: 'February',
          pdf: 'Imprint Issue February 1988.pdf',
          jpg: 'Imprint Issue February 1988.jpg'
        },
        {
          month: 'January',
          pdf: 'Imprint Issue January 1988.pdf',
          jpg: 'Imprint Issue January 1988.jpg'
        }
      ]
    },
    {
      year: 2003,
      issues: [
        {
          month: 'December',
          pdf: 'Imprint Issue_December 2003.pdf',
          jpg: 'Imprint Issue_December 2003.jpg'
        },
        {
          month: 'November',
          pdf: 'Imprint Issue_November 2003.pdf',
          jpg: 'Imprint Issue_November 2003.jpg'
        },
        {
          month: 'October',
          pdf: 'Imprint Issue_October 2003.pdf',
          jpg: 'Imprint Issue_October 2003.jpg'
        }
      ]
    },
    {
      year: 2004,
      issues: [
        {
          month: 'July',
          pdf: 'Imprint Issue_July 2004.pdf',
          jpg: 'Imprint Issue_July 2004.jpg'
        },
        {
          month: 'October',
          pdf: 'Imprint Issue_October 2004.pdf',
          jpg: 'Imprint Issue_October 2004.jpg'
        }
      ]
    },
    {
      year: 2005,
      issues: [
        {
          month: 'December',
          pdf: 'Imprint Issue_December 2005.pdf',
          jpg: 'Imprint Issue_December 2005.jpg'
        },
        {
          month: 'November',
          pdf: 'Imprint Issue_November 2005.pdf',
          jpg: 'Imprint Issue_November 2005.jpg'
        },
        {
          month: 'September',
          pdf: 'Imprint Issue_September 2005.pdf',
          jpg: 'Imprint Issue_September 2005.jpg'
        },
        {
          month: 'July',
          pdf: 'Imprint Issue_July 2005.pdf',
          jpg: 'Imprint Issue_July 2005.jpg'
        },
        {
          month: 'June',
          pdf: 'Imprint Issue_June 2005.pdf',
          jpg: 'Imprint Issue_June 2005.jpg'
        },
        {
          month: 'May',
          pdf: 'Imprint Issue_May 2005.pdf',
          jpg: 'Imprint Issue_May 2005.jpg'
        },
        {
          month: 'April',
          pdf: 'Imprint Issue_April 2005.pdf',
          jpg: 'Imprint Issue_April 2005.jpg'
        },
        {
          month: 'March',
          pdf: 'Imprint Issue_March 2005.pdf',
          jpg: 'Imprint Issue_March 2005.jpg'
        },
        {
          month: 'February',
          pdf: 'Imprint Issue_February 2005.pdf',
          jpg: 'Imprint Issue_February 2005.jpg'
        },
        {
          month: 'January',
          pdf: 'Imprint Issue_January 2005.pdf',
          jpg: 'Imprint Issue_January 2005.jpg'
        }
      ]
    },
    {
      year: 2008,
      issues: [
        {
          month: 'July',
          pdf: 'Imprint Issue_July 2008.pdf',
          jpg: 'Imprint Issue_July 2008.jpg'
        },
        {
          month: 'April',
          pdf: 'Imprint Issue_April 2008.pdf',
          jpg: 'Imprint Issue_April 2008.jpg'
        },
        {
          month: 'March',
          pdf: 'Imprint Issue_March 2008.pdf',
          jpg: 'Imprint Issue_March 2008.jpg'
        }
      ]
    },
    {
      year: 2010,
      issues: [
        {
          month: 'September',
          pdf: 'Imprint Issue_September 2010.pdf',
          jpg: 'Imprint Issue_September 2010.jpg'
        }
      ]
    },
    {
      year: 2011,
      issues: [
        {
          month: 'March',
          pdf: 'Imprint Issue_March 2011.pdf',
          jpg: 'Imprint Issue_March 2011.jpg'
        }
      ]
    },
    {
      year: 2012,
      issues: [
        {
          month: 'July',
          pdf: 'Imprint Issue_July 2012.pdf',
          jpg: 'Imprint Issue_July 2012.jpg'
        }
      ]
    },

  ];

  const container = document.getElementById('magazine-issues'); // The container where issues will be inserted

  function displayIssues(filteredIssues) {
    container.innerHTML = ''; // Clear previous results

    filteredIssues.forEach(yearIssue => {
      const yearDiv = document.createElement('div');
      yearDiv.className = 'allImprintIssue';

      yearIssue.issues.forEach(issue => {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `./assets/magazine/IMPRINT ISSUE ${yearIssue.year}/${issue.pdf}`;

        const img = document.createElement('img');
        img.src = `./assets/magazine/IMPRINT ISSUE ${yearIssue.year}/${issue.jpg}`;
        img.alt = `${issue.month} ${yearIssue.year}`;

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = `${issue.month} ${yearIssue.year}`;

        a.appendChild(img);
        a.appendChild(figcaption);
        li.appendChild(a);
        ul.appendChild(li);
        yearDiv.appendChild(ul);
      });

      container.appendChild(yearDiv);
      container.appendChild(document.createElement('br'));
      container.appendChild(document.createElement('hr'));
    });
  }

  // Initial display of all issues
  displayIssues(issues);

  // Search functionality
  document.getElementById('search').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredIssues = issues.filter(yearIssue => {
      return yearIssue.issues.some(issue =>
        issue.month.toLowerCase().includes(searchInput) ||
        yearIssue.year.toString().includes(searchInput)
      );
    });

    displayIssues(filteredIssues);
  });

  // Optional: Allow pressing Enter to trigger search
  document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('search').click();
    }
  });
});
