import React from "react";
import { NavLink } from "react-router-dom";

const Submit = () => (
  <>
    <h1>Current Prompts</h1>
    <div className="prompts">
      <h3 class="full-row">
        Now accepting submissions for Issue No. 4 (Due July 27th)
      </h3>
      <br></br>
      <h3 class="full-row">tldr: send art to submissions@redlinezine.com</h3>
      <br></br>
      <p class="full-row">
        <NavLink exact to="/guidelines">
          <button className="submit-button">
            Ready to Submit? Review our guidelines here
          </button>
        </NavLink>
      </p>
      <br></br>
      <h3 class="full-row">
        <strong>The Masquerade</strong>
      </h3>
      <br></br>
      <p class="full-row">
        Shimmering braziers line the portico, lively music spills forth from the
        windows and permeates the grounds, and guests adorned with exotic masks
        flow through the colonnade. Vibrantly colored tapestries line the halls
        in which acrobatic performers dazzle the onlookers with feats of grace
        and daring. The party pulses with a primal vital force, as the elaborate
        regalia strain to contain a more feral power. Sophistication and frenzy,
        duplicity and truth: though surely it is unsustainable, it is far too
        late to slow down now, so please, join us: you are cordially invited to{" "}
      </p>
      <span class="full-row">The Masquerade.</span>
      <p class="full-row">I. Smile! // Smile!</p>
      <p>
        You enter to a sea of smiling faces, and smile yourself in turn. You say
        the right things, shake the right hands. You know your place, you know
        your role; you know where to stand, who to praise, and who to mock. What
        you say is far less important than to whom you are seen saying it, and
        what you actually believe matters even less. Effortlessly, you belong.
      </p>
      <p>
        Your invitation is checked, then re-checked. You shuffle in and out of
        conversations, and laugh at the wrong times. You catch their glances out
        of the corner of your eye, and clutch at your threadbare jacket, your
        fraying dress. What do they know? What are they thinking? You grin with
        clenched teeth, and hope to god they don’t smell blood.
      </p>
      <p class="full-row">II. A Waltz, or Two // The Duel</p>
      <p>
        With a serendipitous meeting of the eyes, the two of you come together
        across the ballroom. Two bodies move as one, synchronized in perfect
        time. In your apparent obliviousness to the surrounding crowd, you
        become a spectacle to behold. Each sustained by the other’s glow, you
        communicate thoughtlessly, and though you’ve never felt like this
        before, you know exactly what to do.{" "}
      </p>
      <p>
        As you look at them, their eyes catch yours- did they think you were
        staring? Were they staring at you? Uneasily you both come together,
        unsteadily you sway. You trade compliments and exchange jabs in an
        ever-escalating balancing act, because while the terms of engagement are
        murky, there is one rule which remains crystal clear: whoever cares
        more, loses.{" "}
      </p>
      <p class="full-row">III. Polished Silver // Peeling Gilt</p>
      <p>
        Detached from the crowd for a moment, you marvel at the display before
        you. Each detail has been considered, with every shining light and every
        gleaming morsel adding up to superlative extravagance. The crowd swirls
        in performative ecstasy, a mass ornament of glitter and joy: musicians
        send grandiose overtures bouncing off of domed ceilings, flesh
        encroaches on all sides, and as the pulse and shine entrance your
        senses, you decide to take leave of them entirely
      </p>
      <p>
        In the midst of conversation, you notice a crack in the balustrades. You
        glance outside, and can’t remember how long you’ve been here. A waiter
        catches your eye before disappearing into the kitchen, and you realize
        you don’t know whose party it actually is. With new eyes you regard the
        masked guests. Who are they? Is this real? Who is this show supposed to
        entrance? With mounting dread the questions pile on, which, in the end,
        all lead to one; what’s behind the curtain?
      </p>
      <p class="full-row">IV. Painted Lady // Skin-deep</p>
      <p>
        With an unhurried and deliberate gesture, you smooth over the single
        wrinkle in your sleeve. For the hundredth time, you make sure that the
        one strand of hair is precisely out-of-place. Your bored expression is
        perfectly mysterious, and your practiced laugh rings delicate but
        sincere. Whether you choose to be the loner in the corner or the life of
        the party, you are secure knowing exactly how much skin is showing.
      </p>
      <p>
        With the ghost of the last polite smile still fading from your face, you
        begin the journey home. It’s quiet, finally, and though you know that
        your performance was a success, you let yourself wonder if you had any
        fun. You try to separate yourself from your role; but the lines have
        blurred for too long, and you struggle to draw them again. When you peel
        back every pretense and remove all of the charm—when every artifice
        designed to be ‘seen’ is stripped away—what’s left?
      </p>
    </div>
  </>
);

export default Submit;
