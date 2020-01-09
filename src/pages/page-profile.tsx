import * as React from 'react';
import profile from '../content/images/2018/12/profile-2-1024x614.jpg';

import DefaultLayout from '../components/DefaultLayout';
import FractureTitle from '../components/FractureTitle';

const PageTwo = () => <DefaultLayout>
  <h2><FractureTitle split={'word'}>About Me</FractureTitle></h2>
  <div className="content" style={{ clear: 'both' }}>
    <p>
      My name is Adam Saladino and I like to create software. I’ve been writing code, in some form, since 1997. It is a lot of
      fun to create a software solution to help people or make someone’s job easier.
      </p>
    <p>
      <img alt="Adam Saladino with a beard!" src={profile} />
    </p>
    <p>
      I am Product Developer at <a href='https://teaching.com'>teaching.com</a> and all together I have been writing software for about 20 years.
      Check out my <a rel="noreferrer noopener" aria-label="github profile (opens in a new tab)"
        href="https://github.com/asaladino" target="_blank">github profile</a>
      and <a href="/projects/">portfolio</a> to see what else I’ve be working on.
      </p>
    <p>
      One of the first apps I wrote, was while I worked at Las Casitas Architecture &amp; Planning. I wrote a small windows
      program in C would display our portfolio to clients.&nbsp; The program and assets were small enough to load on a business
      card size CD and would auto-run when loaded.
      </p>
    <p>
      When I’m not creating something on the computer, I love spending time with my family and friends. My wife, Jessie, and
      I have been married for 11 years and we have 4 kids: Stella, Corban, Margo and Darby. We love traveling, hiking, spending
      time with friends, playing games (board and video) and going to the beach.
      </p>
  </div>
</DefaultLayout>

export default PageTwo
