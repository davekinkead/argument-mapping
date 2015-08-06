# Arguments

A prototype for some Argument Mapping software.


## Outline

There are 3 aspects to the software that need to be implemented.


### Text Highlight

When a user highlights HTML text, they should be presented with a tool tip with icons to indicate:

  - premise
  - conclusion
  - ? conclusion marker
  - trash / delete

Once text is highlighted, an option to generate an argument map should appear.


### Argument Map

Highlighted text labelled with `premise` or `conclusion` forms the nodes in a directed graph.

In each node, the highlighted text appears.  Premises connect to conclusions.  A short title can be added to each node.

New nodes can be created and existing ones edited/deleted.  New edges can be draw/deleted.

There is an option to generate an essay structure.


### Essay Structure

The argument map is converted into an essay structure in RTF format.

  - A title populated with the conclusion text
  - An 'Introduction' section heading
  - A section heading for each premise with it's short title
  - A paragraph populated with the premise text
  - A 'Conclusion' section heading
  - A paragraph in the conclusion section populated with the conclusion text